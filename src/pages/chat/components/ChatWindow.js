
import { useEffect } from "react";

import { Col } from "../../../components/xbl";
import ChatHolder from "./ChatHolder";

import { useChatContext } from "../../../context/chat";

import mock from "../../../assets/mock/imgs";

export const ChatWindow = () => {
    const { user, chatMessages } = useChatContext();


    const chats = mock.chats;

    const me = {
        id: 100,
        name: "Grocered",
        dp: "",
    };

    useEffect(() => {
        // load chat for this user
        const random = Math.floor(Math.random() * 10);
        const userChats = [...chats].splice(random, chats.length - random);


        const messagesLength = userChats.length - 1;
        let oldUser = 999;

        //modify the array
        const modified = userChats.map((message, i) => {

            message.className = me.id === message.user ? "right " : "left ";

            // if previous & current user are same
            // if last message
            // // if next user and current user is different
            if (i === messagesLength ||
                ((i < messagesLength) && (message.user !== userChats[i + 1].user))
            ) {
                message.className += oldUser === message.user ? "same-user last" : "last";
            }
            else if (message.user === oldUser) {
                message.className += "middle same-user";
            }
            else {
                message.className += "first";
            }

            oldUser = message.user;

            return message
        })

        chatMessages(modified);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    return (
        <Col md="50" lg="40" className="bg flat h100vh pr">
            <TopBar />
            <ChatHolder />
            <BottomBar />
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


function BottomBar() {
    return <div className="p50 bottombar flex aic jcsb pa w100 b0 l0 z10">
        <input className="h40p graye bor0 p50 br20 w-50 f1 cgray7 mr50 pl1" placeholder="Type message..." />
        <button className="ix-x graye cp bor0 br50 ic ic45"></button>
    </div>
}