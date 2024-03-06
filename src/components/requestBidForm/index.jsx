

import React, { } from 'react';
import { Button, Form, Input, InputNumber, notification } from 'antd';
import { creatorCreateRequestBid } from '../../services/requestBidService';

const Index = (props) => {

  const [form] = Form.useForm();

  const onFinish = (values) => {

    
    console.log('Success:', values, props.requestId);

    creatorCreateRequestBid(props.requestId, values.bidDescription, values.bidPrice, values.bidDuration)
    .then(response => {
      console.log(response)
      notification.info({ message: 'Create new deal', description: 'Create a deal successfully!'})
      form.resetFields()
    })
    .catch(error => {
      console.log(error)
      notification.error({ message: 'Create new deal', description: 'Create a deal failed! please try again'})
    })

  };

  return (
    <>
      <Form
        name="createRequestBidForm"
        form={form}
        labelCol={{
          span: 8,
        }}
        onFinish={onFinish}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Deal description"
          name="bidDescription"
          rules={[
            {
              required: true,
              message: 'Please input deal description!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Deal price ($)"
          name="bidPrice"
          rules={[
            {
              required: true,
              message: 'Please input deal price!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Deal duration"
          name="bidDuration"
          rules={[
            {
              required: true,
              message: 'Please input deal duration (days)!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create a new deal
          </Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default Index;
