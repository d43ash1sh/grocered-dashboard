import React, { useEffect } from 'react';
// import { useDispatch } from "react-redux";


import { Col } from "../../../components/xbl";

// import HookMqtt from '../../../hooks/mqtt'

import { useMqttContext } from "../../../context/mqtt";

const topic = "chat";


export const ChatAssist = () => {
    const { client,
        isConnected,
        subscribe,
        publish,
        onMessage,
        closeConnection } = useMqttContext();


    useEffect(() => {
        //initConnection();

        //close mqtt connection
        return () => closeConnection();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (isConnected()) {
            subscribe(topic);
            onMessage(onMessageHandler);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client]);



    const onMessageHandler = (payload) => {
        console.log("onMessageHandler", payload);
    }

    const publishHandler = (payload = null) => {
        console.log("publishing", payload);

        publish(topic, {
            payload: payload || "sample payload",
            data: new Date().toTimeString()
        });
    }



    return (
        <Col md="50" lg="30" className="white flat h100vh pr lg-up p50">
            <div className="header f12 bold p50">
                Chat assist
            </div>

            <div className="p50 hover-dark cp br10 m50 graye f09">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</div>
            <div className="p50 hover-dark cp br10 m50 graye f09">Lorem ipsum dolor sit amet,  At vero eos et accusam et</div>
            <div className="p50 hover-dark cp br10 m50 graye f09">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt  At vero eos et accusam et</div>

            <div>{client?.connected}</div>
            <button onClick={() => publishHandler("payload 1")}>publish 1</button>
            <button onClick={() => publishHandler("payload 2")}>publish 2</button>
            <button onClick={() => publishHandler("payload 3")}>publish 3</button>
            {/* <HookMqtt /> */}
        </Col>
    )
}

