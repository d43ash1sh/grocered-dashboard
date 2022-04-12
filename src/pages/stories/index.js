import React, { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router-dom";

import Chip from '@mui/material/Chip';

import StoryCard from "../../components/cards/Story";
import { TabPanel, MuiTabs } from "../../components/mui";
import StoriesSidebar from "./components/StoriesSidebar";

import { useWidth } from '../../hooks/useWidth';

import mock from "../../assets/mock/imgs";



export default function Stories() {
    const stories = mock.stories;

    const params = useParams();

    // ----- tabs
    const [tab, setTab] = useState(0);
    const tabs = [
        <div className="count" count="0">Trending</div>,
        <div className="count" count="0">All stories</div>,
        <div className="count" count="5">Review pending</div>,
    ];


    // ----- tags
    const [words, setWords] = useState(["keyword 1", "keyword 2", "keyword 3", "keyword 4", "keyword 5", "keyword 6"]);

    const handleDelete = (e, index) => {
        setWords(words.filter((_, i) => i !== index));
    };
    // ----- tags



    // ---- for handling width fo cards
    const containerRef = useRef();
    const containerwidth = useWidth(containerRef);
    const [width, setWidth] = useState(0);

    const calcWidth = () => {
        const parentWidth = params.id && containerwidth > 882 ? containerwidth - 350 : containerwidth;
        setWidth(100 / Math.floor(parentWidth / (parentWidth < 1024 ? 160 : 200)));

    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(calcWidth, [containerwidth]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(calcWidth, [params.id]);
    // ---- for handling width of cards


    return (
        <div className="sidebar-350" sidebar={params.id || 0}>
            <div className=" main w100 " ref={containerRef}>
                <div className="ps t0 z10 bg pl1-md">
                    <MuiTabs
                        tabs={tabs}
                        value={tab}
                        setValue={setTab}
                    />

                    <div className=' pt25 pb25 w100 ofxa tscroll'>
                        <div className="flex" style={{ width: `${words.length * 150}px` }}>
                            {
                                words.map((e, i) => <div key={i} className="m25">
                                    <Chip label={e} onDelete={(e) => handleDelete(e, i)} className="mini" />
                                </div>)
                            }
                        </div>
                    </div>
                </div>


                <TabPanel value={tab} index={0} className="p50 mt1">
                    <div className="flex fww f08  cwhite pr">
                        {
                            stories.map((e, i) => <StoryCard key={i} data={e} width={`${width}%`} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel value={tab} index={1} className="card mt1">

                </TabPanel>
                <TabPanel value={tab} index={2} className="card mt1">

                </TabPanel>

            </div>

            <StoriesSidebar id={params.id || 0} />
        </div>
    )
}
