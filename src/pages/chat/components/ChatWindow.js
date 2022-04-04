
import { useState, useEffect } from "react";

import { Col, NoData, Ripple } from "../../../components/xbl";
import ChatHolder from "./ChatHolder";

import { useChatContext } from "../../../context/chat";

import mock from "../../../assets/mock/imgs";

import { useMqttContext } from "../../../context/mqtt";

const topic = "chat";


export const ChatWindow = () => {
    const { user,
        me,
        chats,
        chatMessages,
        pushMessages } = useChatContext();


    // mqtt
    const { client,
        initConnection,
        isConnected,
        subscribe,
        publish,
        onMessage,
        closeConnection } = useMqttContext();


    useEffect(() => {
        initConnection();

        //close mqtt connection
        return () => closeConnection();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (isConnected()) {
            subscribe(topic);

            onMessage(messageHandler);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client]);


    const messageHandler = (payload) => {
        if (payload.mgs) {
            console.log("chatWindow messageHandler", payload);

            const { id, user, text } = payload.mgs;

            pushMessages([{ id, user, text }]);
        }
    }




    const [typing, setTyping] = useState("");
    const onSend = () => {
        if (typing.length === 0) {
            return;
        }

        publish(topic, {
            mgs: {
                id: 101,
                user: me.id,
                text: typing
            },
            date: Date.now()
        });

        setTyping("");
    }
    // mqtt


    const all_chats = mock.chats;


    useEffect(() => {
        // load chat for this user
        const random = Math.floor(Math.random() * 10);
        const userChats = [...all_chats].splice(random, all_chats.length - random);

        chatMessages(userChats);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])









    return (
        <Col md="50" lg="40" className="bg flat h100vh pr">
            {
                user && user.name && user.name.length > 0 ? <>
                    <TopBar />
                    <ChatHolder />
                    <BottomBar
                        typing={typing}
                        setTyping={setTyping}
                        onSend={onSend}
                    />
                </> : <div className="pa w100 h100 ic">
                    <NoData />
                </div>
            }
        </Col>
    )
}



function TopBar() {
    const { user } = useChatContext();


    return <div className=" topbar z10 pa t0 l0 w100">
        <div className="flex aic ">
            <div className="ic40 br50 grayd m50 bc" style={{
                backgroundImage: `url(${user.dp})`
            }}></div>
            <div className='w-50'>
                <div className='lc1 cwhite'>{user.name}</div>
                <div className="f07 cgray5">Last active 1 hr ago</div>
            </div>

        </div>
    </div>
}


function BottomBar({ typing, setTyping, onSend }) {
    const onTyping = (e) => {
        setTyping(e.target.value);
    }

    const onEnter = (e) => {
        if (e.key === 'Enter' && typing.length > 0) {
            onSend();
        }
    }


    return <div className="p50 bottombar flex aic jcsb pa w100 b0 l0 z10">
        <input
            value={typing}
            // onKeyDown={onEnter}
            onChange={onTyping}
            className="h40p graye bor0 p50 br20 w-50 f1 cgray7 mr50 pl1"
            placeholder="Type message..."
        />
        <Ripple onClick={onSend}>
            <div className="br50">
                <button className="ix-send f12 graye caccent hover-dark cp bor0 br50 ic ic45"></button>
            </div>
        </Ripple>
    </div>
}