// @ts-nocheck


import React, { useState } from 'react';
import { Button, Form, Input, Space, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { creatorCreateRequestProgress } from 'services/requestProgressService';
import { FirebaseUploadMedia } from 'components';
import { useUploadMediaStore } from 'stores/uploadMediaStore';

const Index = (props) => {

  const [form] = Form.useForm();

  const uploadMediaStore = useUploadMediaStore()

  const onFinish = (values) => {
    console.log('Success:', values, props.requestId);

    const urls = uploadMediaStore.mapMediasToUrls()

    creatorCreateRequestProgress(props.requestId, values.description, urls)
    .then(response => {
      notification.info({ message: 'Create request progress', description: 'Create request progress successfully!'})
    })
    .catch(err => {
      console.log(err)
      notification.error({ message: 'Create request progresss', description: 'Error while create request progress, please try again'})
    })
    

    form.resetFields()
  };



  return (
    <>
      <Form
        form={form}
        labelAlign='left'
        name="createRequestProgressReport"
        labelCol={{
          span: 6,
        }}
        onFinish={onFinish}
        wrapperCol={{
          span: 16,
        }}
        
        autoComplete="off"
      >

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
            {
              type: 'string',
              whitespace: true
            },
          ]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item>
          <FirebaseUploadMedia />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={uploadMediaStore.loading}>
            Submit report
          </Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default Index;
