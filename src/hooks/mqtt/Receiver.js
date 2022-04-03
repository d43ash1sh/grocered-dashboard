import React, { useEffect, useState } from 'react';


const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])



  return (
    <div title="Receiver">
      {JSON.stringify(messages)}
    </div>
  );
}

export default Receiver;
