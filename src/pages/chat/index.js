// import { Col } from "../../components/xbl";

import { ChatItems } from "./components/ChatItems";
import { ChatAssist } from "./components/ChatAssist";
import { ChatWindow } from "./components/ChatWindow";


import { ChatContextProvider } from "../../context/chat";

export default function Chat() {

    return (
        <ChatContextProvider>
            <div className=" flex fww aifs chat">
                <ChatItems />
                <ChatWindow />
                <ChatAssist />
            </div>
        </ChatContextProvider>
    )
}



