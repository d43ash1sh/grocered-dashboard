
import mqtt from "precompiled-mqtt";

import { createContext, useContext, useState } from "react";

const urls = {
    test: "mqtt://test.mosquitto.org:8081",

    local: "ws://192.168.43.116:8080",
    localSsl: "wss://192.168.43.116:8081",

    aws: "ws://grocered.online:8080",
    awsSsl: "wss://grocered.online:8081",
}
/// url

const URL = urls.awsSsl;
const TOPIC = "grocered";


export const mqttContext = createContext({
    client: null,
    initConnection: () => { },
    isConnected: () => { },
    subscribe: () => { },
    unsubscribe: () => { },
    publish: () => { },
    onMessage: () => { },
    closeConnection: () => { },
})



export function MqttContextProvider({ children }) {
    const [client, setClient] = useState({});

    const initConnection = (callback = null) => {

        if (client && client.connected) {
            console.log("Already connected");
            return;
        }

        console.log("Connecting");
        let temp_client = mqtt.connect(URL);

        temp_client.on('connect', (client_a) => {
            //update client
            setClient(temp_client);

            console.log("CONNECTED", "a:", client_a);
            if (callback) {
                callback(client_a);
            }
        });


    }

    const isConnected = () => {
        return (client && client.connected ? true : false);
    }

    const getTopic = (topic = "") => {
        return `${TOPIC}/${topic}`;
    }



    const publish = (topic, payload) => {
        if (!isConnected) {
            return "Client not connected";
        }
        client.publish(getTopic(topic), JSON.stringify(payload), { qos: 0 }, error => {
            if (error) {
                console.log('Publish error: ', error);
            }
        });

    }

    const onMessage = (callBack) => {
        client.on("message", (topic, message, packet) => {
            callBack(JSON.parse(new TextDecoder("utf-8").decode(message)));
        });
    }

    const subscribe = (topic) => {
        if (!isConnected) {
            return "Client not connected";
        }

        return client.subscribe(getTopic(topic), (err, granted) => {
            if (err) {
                errorHandler("Subscription request failed");
            }
            else {
                console.log("Subscribed ", granted);
            }
        });
    }

    const unsubscribe = (topic) => {
        if (!isConnected) {
            return "Client not connected";
        }

        client.unsubscribe(getTopic(topic));
    }


    const closeConnection = () => {
        if (client && client.end) {
            client.end();
        }
    }


    function errorHandler(e) {
        console.error("ERROR ", e);
    }


    return (<mqttContext.Provider value={{
        client,
        initConnection,
        isConnected,
        subscribe,
        unsubscribe,
        publish,
        onMessage,
        closeConnection
    }}>
        {children}
    </mqttContext.Provider>);
}



export function useMqttContext() {
    const { client,
        initConnection,
        isConnected,
        subscribe,
        unsubscribe,
        publish,
        onMessage,
        closeConnection } = useContext(mqttContext);
    return {
        client,
        initConnection,
        isConnected,
        subscribe,
        unsubscribe,
        publish,
        onMessage,
        closeConnection
    };
}