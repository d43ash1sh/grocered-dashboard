import React, { useContext } from 'react';
import { Input } from "../../components/xbl";
import { QosOption } from './index'

const Publisher = ({ publish }) => {
  const qosOptions = useContext(QosOption);

  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };

  const onFinish = (values) => {
    publish(values)
  };

  const Publishform = (
    <form
      layout="vertical"
      name="basic"
      initialValues={record}
      onFinish={onFinish}
    >
      <div gutter={20}>
        <div span={12}>

          <Input label="Topic" />
        </div>
        <div span={12}>
          QoS
          <select options={qosOptions} >
            {
              qosOptions.map(e => <option value={e.value}>{e.label}</option>)
            }
          </select>
        </div>
        <div span={24}>
          <Input type="textarea" label="Payload" />
        </div>
        <div span={8} offset={16} style={{ textAlign: 'right' }}>
          <button type="primary" htmlType="submit">
            Publish
          </button>
        </div>
      </div>
    </form>
  )

  return (
    <Card
      title="Publisher"
    >
      {Publishform}
    </Card>
  );
}

export default Publisher;
