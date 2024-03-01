

import React, { useState } from 'react';
import { Button, Form, Input, Space, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { CloseOutlined } from '@ant-design/icons';
import { creatorCreateRequestProgress } from 'services/requestProgressService';

const Index = (props) => {

  const [form] = Form.useForm();

  const [attachmentFormKeys, setAttachmentFormKeys] = useState([])

  const onFinish = (values) => {
    console.log('Success:', values, props.requestId);

    const attachmentUrls = attachmentFormKeys.map(key => {
      return values[key]
    })

    creatorCreateRequestProgress(props.requestId, values.description, attachmentUrls)
    .then(response => {
      notification.info({ message: 'Create request progress', description: 'Create request progress successfully!'})
    })
    .catch(err => {
      console.log(err)
      notification.error({ message: 'Create request progresss', description: 'Error while create request progress, please try again'})
    })
    .finally(() => props.refreshPage())
    

    form.resetFields()
  };

  const addNewAttachmentForm = () => {

    attachmentFormKeys.push(`attachment_${Date.now()}`)

    //generate brand new array for react know it changed
    setAttachmentFormKeys([...attachmentFormKeys])

  }

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
        {

          attachmentFormKeys.map((key) =>
            <Form.Item
              key={key}
              name={key}
              label="attachment url"
              rules={[
                {
                  required: true,
                },
                {
                  type: 'url',
                },
                {
                  type: 'string',
                  min: 6,
                },
              ]}
            >
              <Space direction='horizontal'>
                <Input />
                <CloseOutlined
                  onClick={() => {
                    const index = attachmentFormKeys.indexOf(key)
                    attachmentFormKeys.splice(index, 1)

                    setAttachmentFormKeys([...attachmentFormKeys])
                  }} />
              </Space>
            </Form.Item>)
        }
        <Form.Item>
          <Button type="default" onClick={() => addNewAttachmentForm()}>Add new attachment url</Button>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit report
          </Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default Index;
