import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import FeedbackRow from "../../components/rows/FeedbackRow";
import { TabPanel, MuiTabs } from "../../components/mui";
import FeedbackSidebar from "./components/FeedbackSidebar";

import mock from "../../assets/mock/imgs";



export default function Feedbacks() {
    const params = useParams();

    const [tab, setTab] = useState(0);
    const feedbacks = mock.feedbacks;

    const tabs = [
        <div className="badge" count="1">Unreplied</div>,
        <div className="badge" count="3">Replied</div>,
        <div className="badge" count="30">Closed</div>,
    ]

    return (
        <div className="feedback-page" sidebar={params.id || 0}>
            <div className="p1 main w100 tr2">
                <div>
                    <div className="ps t0 z10 bg ">
                        <MuiTabs
                            tabs={tabs}
                            value={tab}
                            setValue={setTab}
                        />
                    </div>
                    <TabPanel value={tab} index={0} className="card mt1">
                        {
                            feedbacks.map((data, i) => <FeedbackRow key={i} data={data} />)
                        }
                    </TabPanel>

                    <TabPanel value={tab} index={1} className="card mt1">
                        {
                            feedbacks.slice(3, 5).map((data, i) => <FeedbackRow key={i} data={data} />)
                        }
                    </TabPanel>
                    <TabPanel value={tab} index={2} className="card mt1">
                        {
                            feedbacks.slice(2, 3).map((data, i) => <FeedbackRow key={i} data={data} />)
                        }
                    </TabPanel>

                </div>
            </div>

            <FeedbackSidebar id={params.id || 0} />
        </div>
    )
}
