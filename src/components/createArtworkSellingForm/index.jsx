

import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { Option } from 'antd/es/mentions';
import { AUCTION, AUCTION_EXPECTED_PRICE, DIRECT } from 'models/ArtworkSellingType';
import { useArtworkDetailStore } from 'stores/artworkDetailStore';
import { translateErrorToNotify } from 'utils/errorHandle';

const Index = () => {


  const [artworkSellingType, setArtworkSellingType] = useState(DIRECT)

  const sellArtwork = useArtworkDetailStore(state => state.sellArtwork)

  const [form] = Form.useForm()

  const navigate = useNavigate()


  const onFinish = (values) => {
    console.log('Success:', values);

    sellArtwork(values.artworkSellingType, values.sellingDuration, values.expectedSellingPrice)
      .then(response => {
        console.log(response)
        notification.success({ message: 'Artwork selling', description: 'Create artwork selling successfully! please keep track your selling state' })
        navigate('/mine/artworks')
      })
      .catch(error => translateErrorToNotify(error))
  };


  const onSellingTypeChange = (value) => {
    setArtworkSellingType(value)
  }

  return (
    <>
      <Form
        form={form}
        name="artworkSellingForm"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="artworkSellingType"
          label="Selling type"
          initialValue={DIRECT}

          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            allowClear
            onChange={(value) => onSellingTypeChange(value)}
          >
            <Option value={DIRECT}>Direct selling</Option>
            <Option value={AUCTION_EXPECTED_PRICE}>Auction with expected price</Option>
          </Select>
        </Form.Item>

        {
          artworkSellingType !== AUCTION &&
          (<Form.Item
            label="Expected selling price"
            name="expectedSellingPrice"
            rules={[
              {
                required: true,
                message: 'Please input expected selling price!',
              },
            ]}
          >
            <InputNumber prefix="$" min={1} max={99999999}/>
          </Form.Item>)
        }

        {
          artworkSellingType !== DIRECT &&
          <Form.Item
            label="Selling duration"
            name="sellingDuration"
            rules={[
              {
                required: true,
                message: 'Please input selling duration!',
              },
            ]}
          >
            <InputNumber prefix="day" min={1} max={99999999}/>
          </Form.Item>
        }


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" >
            Sell artwork
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}


export default Index;
