
import ChatBubble from "./ChatBubble";
import { useChatContext } from "../../../context/chat";


const ChatHolder = () => {
    const { chats } = useChatContext();

    return <div className="pa w100 t0 h100 l0 ofya tscroll f09" style={{ padding: "56px 15px 80px" }}>
        {
            chats.map((message, i) => <ChatBubble
                key={i}
                message={message}
                className={message.className}
            />)
        }
    </div>
}

export default ChatHolder;