import { Button, Card, Form, Input, Checkbox, notification } from "antd";
import React from "react";

import styles from "./index.module.css";
import { loginService } from "../../services/authenticationService";
import { useAuthenticationStore } from "../../stores/authenticationStore";
import { useNavigate } from "react-router-dom";


const Index = () => {
  
  const setAccessToken = useAuthenticationStore(state => state.setAccessToken)
  const navigate = useNavigate()

  const onFinish = async (fields) => {
    loginService(fields.username, fields.password, fields.remember).then(response => {
      console.log(response)
      notification.info({ message: 'login succeed', description: 'you will be redirect in seconds...'})
      setAccessToken(response) 
      navigate('/profile')
      
    }).catch(err => {
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
