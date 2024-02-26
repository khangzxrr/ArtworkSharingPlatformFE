

import React, {  } from 'react';
import { Descriptions, Divider, Form } from 'antd';

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
      <Descriptions.Item label="Request title">{props.request.title}</Descriptions.Item>
      <Descriptions.Item label="Request description">{props.request.description}</Descriptions.Item>
      </Descriptions>

        <Divider />
    </>
  );
};

export default Index;
