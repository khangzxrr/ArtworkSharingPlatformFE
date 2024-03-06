

import React, {  } from 'react';
import { Descriptions, Divider, Form, Typography } from 'antd';

const Index = (props) => {

  const [form] = Form.useForm();

  

  if (props.request) {
    form.setFieldsValue({
      requestTitle: props.request.title,
      requestDescription: props.request.description,
    })
  }
  


  return (
    <>
      <Descriptions title="Request information">
      <Descriptions.Item label="Request title"><Typography.Text strong>{props.request.title}</Typography.Text></Descriptions.Item>
      <Descriptions.Item label="Request description"><Typography.Text strong>{props.request.description}</Typography.Text></Descriptions.Item>
      </Descriptions>

        <Divider />
    </>
  );
};

export default Index;
