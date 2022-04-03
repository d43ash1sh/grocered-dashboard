import React from 'react';

import { Input } from "../../components/xbl";

const Connection = ({ connect, disconnect, connectBtn }) => {
  const record = {
    host: 'broker.emqx.io',
    clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
    port: 8083,
  };
  const onFinish = (values) => {
    const { host, clientId, port, username, password } = values;
    const url = `ws://${host}:${port}/mqtt`;
    const options = {
      keepalive: 30,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
      },
      rejectUnauthorized: false
    };
    options.clientId = clientId;
    options.username = username;
    options.password = password;
    connect(url, options);
  };

  const handleConnect = () => {
    // form.submit();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const ConnectionForm = (
    <form
      layout="vertical"
      name="basic"
    >
      <div gutter={20}>
        <div span={8}>

          <Input placeholder="host" />
        </div>
        <div span={8}>

          <Input placeholder="port" />
        </div>
        <div span={8}>

          <Input placeholder="clientId" />
        </div>
        <div span={8}>
          <Input placeholder="username" />
        </div>
        <div span={8}>
          <Input placeholder="username" />
        </div>
      </div>
    </form>
  )

  return (
    <div
      title="Connection"
      actions={[
        <div type="primary" onClick={handleConnect}>{connectBtn}</div>,
        <div danger onClick={handleDisconnect}>Disconnect</div>
      ]}
    >
      {ConnectionForm}
    </div>
  );
}

export default Connection;
