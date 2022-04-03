import { createContext, useContext, useState } from "react";





const me = {
    id: 100,
    name: "Grocered",
    dp: "",
};


const modifyChats = (c) => {
    const messagesLength = c.length - 1;
    let oldUser = 999;

    return c.map((message, i) => {

        message.className = me.id === message.user ? "right " : "left ";

        // if previous & current user are same
        // if last message
        // // if next user and current user is different
        if (i === messagesLength ||
            ((i < messagesLength) && (message.user !== c[i + 1].user))
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
}






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
    pushMessages: () => { },
    clear: () => { },
})





export function ChatContextProvider({ children }) {
    const [user, setUser] = useState(DEFAULT_USER);
    const [chats, setChats] = useState([]);

    const activateChat = (data) => {
        setUser(data)
    }

    const chatMessages = (messages) => {
        //get messages then modify
        setChats(modifyChats(messages))
    }

    const pushMessages = (newMessages) => {
        //get messages then modify
        setChats(modifyChats([...chats, ...newMessages]))
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
        pushMessages,
        clear
    }}>
        {children}
    </chatContext.Provider>);
}



export function useChatContext() {
    const { user, chats, activateChat, chatMessages, pushMessages, clear } = useContext(chatContext);
    return { user, chats, activateChat, chatMessages, pushMessages, clear };
}