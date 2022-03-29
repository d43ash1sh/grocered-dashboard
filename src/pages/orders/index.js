import React, { useState } from 'react';
// import Box from '@mui/material/Box';

import { TabPanel, MuiTabs } from "../../components/mui";
import mock from "../../assets/mock/imgs";





export default function Orders() {

    const [tab, setTab] = useState(0);

    const orders = mock.orders.slice(0, 5);

    return (
        <div className="p1">
            <div>
                <MuiTabs
                    tabs={["All orders", "Received", "Verified", "Bagged", "On delivery", "Delivered"]}
                    value={tab}
                    setValue={setTab}
                />
                <TabPanel value={tab} index={0} className="card mt1">
                    {
                        orders.map((data, i) => <div className="flex aic jcsb hover-dark p8 cp">
                            <div className="flex aic">
                                <div className="ic40 br50 grayd mr10 bc" style={{
                                    backgroundImage: `url(${data.dp})`
                                }}></div>
                                <div>
                                    <div className="f09 bold cgray7">{data.name}</div>

                                </div>
                            </div>
                            <div className="flex aic">
                                <div className="tc  cgray7 mr50">
                                    <div className="rs bold">{data.amount.toLocaleString("en-IN")}</div>
                                    <div className="f08 cgray9">14 items</div>
                                </div>
                                <div className="ic40 pr ">
                                    <div className="ix-three-dot cgraya ic40 br50 ic hover-dark"></div>
                                </div>

                            </div>
                        </div>)
                    }
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={tab} index={3}>
                    Item 4
                </TabPanel>
                <TabPanel value={tab} index={4}>
                    Item 5
                </TabPanel>
                <TabPanel value={tab} index={5}>
                    Item 6
                </TabPanel>
            </div>


        </div>
    )
}



