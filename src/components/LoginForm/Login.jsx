import { Button, Card, Form, Input, Checkbox, notification } from "antd";
import axios from "axios";
import React from "react";
import "./Login.css";


const LoginForm = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.get(
        "https://65b6310bda3a3c16ab0054ed.mockapi.io/artwork/api/v1/Users"
      );

      if (response && response.data) {
        const user = response.data.find(
          (item) => item.username === values.username
        );

        if (user) {
          if (user.password === values.password) {
            notification.open({
              message: "Notification Title",
              description: "Login successfully",
            });
          } else {
            notification.open({
              message: "Notification Title",
              description: "Incorrect password",
            });
          }
        } else {
          notification.open({
            message: "Notification Title",
            description: "Username not found",
          });
        }
      } else {
        notification.open({
          message: "Notification Title",
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
      notification.open({
        message: "Notification Title",
        description: "An error occurred",
      });
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
