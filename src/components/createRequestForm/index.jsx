

import styles from "./index.module.css";
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useAuthenticationStore } from "../../stores/authenticationStore";
import { USER_AUTHORIZE } from "../../utils/constants";
import { userCreateRequest, userGetRequests } from "../../services/requestService";
import { Link } from "react-router-dom";

const Index = () => {

  const onFinish = (values) => {
    console.log('Success:', values);

    userCreateRequest(values.requestTitle, values.requestDescription)
    .then(response => {
      notification.info({ message: 'Create request', description: 'Create request successfully!'})
    })
    .catch(err => {
      notification.error({ message: 'Create request', description: 'Error when create new request, please try again!'})
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const role = useAuthenticationStore(state => state.role);

  useEffect(() => {

    console.log(role);

  }, [])


  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create a new request
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;
