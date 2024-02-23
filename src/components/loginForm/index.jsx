import { Button, Card, Form, Input, Checkbox, notification } from "antd";
import React from "react";

import styles from "./index.module.css";
import { getAccount, login } from "../../services/authenticationService";
import { setAccount, setToken, useAuthenticationStore } from "../../stores/authenticationStore";
import { useNavigate } from "react-router-dom";
import { USER_AUTHORIZE } from "../../utils/constants";


const Index = () => {
  
  const navigate = useNavigate()

  const onFinish = async (fields) => {

    login(fields.username, fields.password, fields.remember).then(token => {
      console.log(token)
      setToken(token)

      return getAccount()
    }).then(account => {
      setAccount(account)

      notification.info({ message: 'login succeed', description: 'you will be redirect in seconds...'})
      
      navigate('/profile')

    })
    .catch(err => {
      console.log(err)
      notification.error({ message: 'login failed', description: 'please check again' })
    })
  };

  return (
      <Card title="Login" className="card">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-button">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
  );
};

export default Index;
