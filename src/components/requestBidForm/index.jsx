

import React, { } from 'react';
import { Button, Form, Input, InputNumber, notification } from 'antd';
import { userCreateRequest } from "../../services/requestService";
import { creatorCreateRequestBid } from '../../services/requestBidService';

const Index = (props) => {

  const onFinish = (values) => {

    
    console.log('Success:', values, props.requestId);

    creatorCreateRequestBid(props.requestId, values.bidDescription, values.bidPrice, values.bidDuration)
    .then(response => {
      console.log(response)
    })

  };

  return (
    <>
      <Form
        name="basic"
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
          label="Bid description"
          name="bidDescription"
          fi
          rules={[
            {
              required: true,
              message: 'Please input bid description!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Bid price"
          name="bidPrice"
          rules={[
            {
              required: true,
              message: 'Please input bid price!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Bid duration"
          name="bidDuration"
          rules={[
            {
              required: true,
              message: 'Please input bid duration!',
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
            Create a new bid
          </Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default Index;
