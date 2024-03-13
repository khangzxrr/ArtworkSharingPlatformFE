

import React, { useState } from 'react';
import { Button, Col, Form, InputNumber, Row, Spin } from 'antd';
import { useNavigate } from "react-router-dom";

import { Typography } from 'antd';
import { useArtworkDetailStore } from 'stores/artworkDetailStore';
import { placeBid } from 'services/artworkSellingService';
import { translateErrorToNotify } from 'utils/errorHandle';

const { Text } = Typography;

const Index = (props) => {

  const [loading, setLoading] = useState(false)


  const navigate = useNavigate()

  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Success:', values);

    setLoading(true)

    placeBid(props.artworkId, props.sellingId, values.bidPrice)
    .then(response => { form.resetFields()})
    .catch(error => translateErrorToNotify(error))
    .finally(() => setLoading(false))

  }


  return (
    <Form
      form={form}
      name="artworkSellingBidForm"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Bid price"
        name="bidPrice"
        rules={[
          {
            required: true,
            message: 'Please input expected selling price!',
          },
        ]}
      >
        <InputNumber prefix="$" min={1} max={99999999} />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

        {
          loading ? <Spin /> : <Button type="primary" htmlType="submit" >Place bid</Button>
        }


      </Form.Item>
    </Form>
  );
};

export default Index;
