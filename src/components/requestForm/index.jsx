

import React, {  } from 'react';
import { Divider, Flex, Form, Input } from 'antd';
import { RequestBidList } from "..";

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
      <Flex gap="middle" align="center" vertical>
        <Form
          disabled={true}
          form={form}
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Request title"
            name="requestTitle"
            rules={[
              {
                required: true,
                message: 'Please input request title!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Request description"
            name="requestDescription"
            rules={[
              {
                required: true,
                message: 'Please input request description!',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

        </Form>

        <Divider />

        {/* {(request.user && request.user.login !== account.login && isContainCreatorRole()) &&
          <RequestBidForm requestId={requestId} />
        } */}
      </Flex>
    </>
  );
};

export default Index;
