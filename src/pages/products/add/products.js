import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { Col, Input, Bull, Ripple, NoData } from "../../../components/xbl";
import { TabPanel, MuiTabs } from "../../../components/mui";
import mock from "../../../assets/mock/imgs";



export const Variant = () => {
    const [tab, setTab] = useState(0);
    const products = mock.products.slice(0, 5);

    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header  flex jcsb aic">
                <span>Variants</span>
                <Ripple>
                    <button className="mbtn theme-t8">Add variant</button>
                </Ripple>
            </div>

            <Input
                className="no-focus-label"
                label="Search variant products..."
            />

            <div>
                <MuiTabs
                    tabs={["Variants", "Search"]}
                    value={tab}
                    setValue={setTab}
                />

                <TabPanel value={tab} index={0}>
                    <NoData />
                </TabPanel>

                <TabPanel value={tab} index={1}>
                    {
                        products.map((e, i) => <div key={i} className="pt50 pb50 flex aic jcsb">
                            <div className="flex aic">
                                <div className="ic60 grayd br8 bc mr50" style={{
                                    backgroundImage: `url(${e.image})`
                                }}></div>
                                <div className=" ">
                                    <div>{e.name}</div>
                                    <Bull className="f08 cgray9" list={[
                                        e.qty,
                                        `Rs ${e.mrp}`
                                    ]} />
                                </div>

                            </div>
                            <div style={{ width: "64px" }}>
                                {
                                    i === 2 ?
                                        <div className='ix-delete ic40 ic br50 cp graye mauto'></div> :
                                        <Button variant="contained">Add</Button>
                                }
                            </div>
                        </div>)
                    }
                </TabPanel>
            </div>


        </Col>
    )
}


export const SimilarProducts = () => {
    const [tab, setTab] = useState(0);
    const products = mock.products.slice(0, 5);


    return (
        <Col className="p50" card="card ofh p1 flat">
            <div className="header  flex jcsb aic">
                <span>Similar products</span>
            </div>

            <Input
                className="no-focus-label"
                label="Search similar products..."
            />

            <div>
                <MuiTabs
                    tabs={["Similar", "Search"]}
                    value={tab}
                    setValue={setTab}
                />

                <TabPanel value={tab} index={0}>
                    <NoData />
                </TabPanel>

                <TabPanel value={tab} index={1}>
                    {
                        products.map((e, i) => <div key={i} className="pt50 pb50 flex aic jcsb">
                            <div className="flex aic">
                                <div className="ic60 grayd br8 bc mr50" style={{
                                    backgroundImage: `url(${e.image})`
                                }}></div>
                                <div className=" ">
                                    <div>{e.name}</div>
                                    <Bull className="f08 cgray9" list={[
                                        e.qty,
                                        `Rs ${e.mrp}`
                                    ]} />
                                </div>

                            </div>
                            <div style={{ width: "64px" }}>
                                {
                                    i === 2 ?
                                        <div className='ix-delete ic40 ic br50 cp graye mauto'></div> :
                                        <Button variant="contained">Add</Button>
                                }
                            </div>
                        </div>)
                    }
                </TabPanel>
            </div>
        </Col>
    )
}


