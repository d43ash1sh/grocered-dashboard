import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';


const HookMqtt = () => {


  const SOME_URL = 'mqtt://test.mosquitto.org:8081'

  const [connectionStatus, setConnectionStatus] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("Connecting")
    const client = mqtt.connect(SOME_URL);
    client.on('connect', () => setConnectionStatus(true));

    client.subscribe('ashiqdey');

    client.on('message', (topic, payload, packet) => {
      console.log(topic, payload);
      setMessages(messages.concat(payload.toString()));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      status : {connectionStatus ? "connected" : "not connected"}
      {messages.map((message) => <h2>{message}</h2>)}
    </>
  );
}

export default HookMqtt;
