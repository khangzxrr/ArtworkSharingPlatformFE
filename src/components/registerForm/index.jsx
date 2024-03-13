import { Button, Card, Form, Input, Checkbox, notification } from "antd";
import React from "react";

import styles from "./index.module.css";
import { registerService } from "../../services/authenticationService";
import { useAuthenticationStore } from "../../stores/authenticationStore";
import { useNavigate, Link } from "react-router-dom";

const Index = () => {
  const setAccessToken = useAuthenticationStore(
    (state) => state.setAccessToken
  );
  const navigate = useNavigate();

  const onFinish = async (fields) => {
      registerService()
       .then((response) => {
         console.log(response);
         notification.info({
           message: "register succeed",
           description: "you will be redirect in seconds...",
         });
         setAccessToken(response);
        navigate("/login");
       })
       .catch((err) => {
         console.log(err);
         notification.error({
           message: "register failed",
           description: "please check again",
         });
       });
       navigate("/register");
  };

  return (
    <Card title="Register" className="card">
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[{ required: true, message: "Please input your firstName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="lastName"
          rules={[{ required: true, message: "Please input your lastName!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="YourEmail"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
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
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="form-button">
            Register
          </Button>
        </Form.Item>
        <p>
          You are a member ? <Link to="/login">Login now</Link>
        </p>
      </Form>
    </Card>
  );
};

export default Index;
