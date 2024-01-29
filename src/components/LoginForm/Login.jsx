import { Button, Card, Form, Input, Checkbox, notification } from "antd";
import axios from "axios";
import React from "react";
import "./Login.css";


const LoginForm = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/authenticate",
        {
          username: values.username,
          password: values.password,
          rememberMe: values.remember,
        }
      );

      if (response && response.data) {
        notification.open({
          message: "Authenticate notification",
          description: "Login success",
        });
      } else {
        notification.open({
          message: "Authenticate notification",
          description: "Error fetching user data",
        });
      }
      if (values.remember) {
        console.log('checked');
      } else{
        console.log('unchecked');
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response.status == 401) {
        notification.open({
          message: "Authenticate notification",
          description: "Wrong username or password",
        });
      }
    }
  };
  return (
    <div className="container">
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
    </div>
  );
};

export default LoginForm;
