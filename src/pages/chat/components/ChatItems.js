import React, { useState, useRef } from 'react';
// import { useDispatch } from "react-redux";


import { Col, NoData } from "../../../components/xbl";

import { TabPanel, MuiTabs } from "../../../components/mui";
import SearchBox from "../../../components/micro/SearchBox";
import useOnOutside from "../../../hooks/useOnOutside";

import { useChatContext } from "../../../context/chat";


import mock from "../../../assets/mock/imgs";
import ChatItem from "./ChatItem";


export const ChatItems = () => {
    const chats = mock.chatlist;

    const [tab, setTab] = useState(0);
    const [expanded, setSearch] = useState(0);

    const searchRef = useRef();
    useOnOutside(searchRef, () => setSearch(0));


    const searchHandler = (v) => {
        console.log(v);
    }






    const { activateChat } = useChatContext();
    const clickHandler = (v) => {
        activateChat(v);
    }

    return (
        <Col md="50" lg="30" className="white flat h100vh ">
            <div className="pr">
                <div
                    ref={searchRef}
                    className="p50 t0 r0 pa z3 collapsed-search"
                    expanded={expanded}
                    onClick={() => setSearch(1)}
                >
                    <SearchBox callback={searchHandler} />
                </div>
            </div>

            <MuiTabs
                tabs={["All", "Recent", "Assigned", "Unresponded"]}
                value={tab}
                setValue={setTab}
                tabStyle={{ padding: "18.5px 10px", minWidth: "50px" }}
            />

            <div className="chat-list pr w100 b0 l0 ofya tscroll" style={{ height: "calc(100vh - 56px)" }}>
                <TabPanel value={tab} index={0}>
                    {
                        chats.map((data, i) => <ChatItem key={i} data={data} onClick={() => clickHandler(data)} />)
                    }
                </TabPanel>

                <TabPanel value={tab} index={1}>
                    {
                        [...chats].splice(3, 3).map((data, i) => <ChatItem key={i} data={data} />)
                    }
                </TabPanel>

                <TabPanel value={tab} index={2}>
                    <div className="pa-100 flex ic"><NoData /></div>
                </TabPanel>

                <TabPanel value={tab} index={3}>
                    <div className="pa-100 flex ic"><NoData /></div>
                </TabPanel>
            </div>
        </Col>
    )
}



