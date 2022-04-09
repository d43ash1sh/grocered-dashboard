import React, { useState } from 'react';
// import Box from '@mui/material/Box';

import OrderRow from "../../components/rows/OrderRow";
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
                        orders.map((data, i) => <OrderRow key={i} data={data} />)
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



