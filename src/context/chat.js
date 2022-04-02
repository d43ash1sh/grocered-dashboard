import { createContext, useContext, useState } from "react";

const DEFAULT_USER = {
    dp: "",
    id: 100,
    name: "",
    text: "",
    date: ""
}


export const chatContext = createContext({
    user: null,
    chats: null,
    activateChat: () => { },
    chatMessages: () => { },
    clear: () => { },
})



export function ChatContextProvider({ children }) {
    const [user, setUser] = useState(DEFAULT_USER);
    const [chats, setChats] = useState([]);

    const activateChat = (data) => {
        setUser(data)
    }

    const chatMessages = (messages) => {
        setChats(messages)
    }

    const clear = () => {
        setUser(DEFAULT_USER)
        setChats([])
    }

    return (<chatContext.Provider value={{
        user,
        chats,
        activateChat,
        chatMessages,
        clear
    }}>
        {children}
    </chatContext.Provider>);
}



export function useChatContext() {
    const { user, chats, activateChat, chatMessages, clear } = useContext(chatContext);
    return { user, chats, activateChat, chatMessages, clear };
}