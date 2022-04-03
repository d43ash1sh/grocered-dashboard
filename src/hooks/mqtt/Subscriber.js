import React, { useContext } from 'react';
import { QosOption } from './index'
import { Input } from "../../components/xbl";

const Subscriber = ({ sub, unSub, showUnsub }) => {
  const [form] = form.useform();
  const qosOptions = useContext(QosOption);

  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };

  const onFinish = (values) => {
    sub(values);
  };

  const handleUnsub = () => {
    const values = form.getFieldsValue();
    unSub(values);
  };

  const Subform = (
    <form
      layout="vertical"
      name="basic"
      form={form}
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
        <div span={8} offset={16} style={{ textAlign: 'right' }}>
          <button type="primary" htmlType="submit">
            Subscribe
          </button>
          {
            showUnsub ?
              <button type="danger" style={{ marginLeft: '10px' }} onClick={handleUnsub}>
                Unsubscribe
              </button>
              : null
          }
        </div>
      </div>
    </form>
  )

  return (
    <div
      title="Subscriber"
    >
      {Subform}
    </div>
  );
}

export default Subscriber;
