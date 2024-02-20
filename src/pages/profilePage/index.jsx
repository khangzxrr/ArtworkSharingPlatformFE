import React, { useEffect, useState } from "react";
import { Card, Col, Flex, Row } from "antd";
import {
    DatePicker,
    Form,
    Input,
} from 'antd';
import { getAccount } from "../../services/authenticationService";

const Index = () => {

    const [account, setAccount] = useState({});

    useEffect(() => {
        getAccount().then(response => setAccount(response))
            .catch(err => console.log(err))
    }, [])

    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Profile information" bordered={false}>
                    <Form
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"

                        fields={[
                            {
                                name: ["firstName"],
                                value: account.firstName,
                            },
                            {
                                name: ["lastName"],
                                value: account.lastName,
                            },
                            {
                                name: ["email"],
                                value: account.email,
                            },
                        ]}

                    >

                        <Form.Item label="Firstname" name="firstName">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Lastname" name="lastName">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>
                    </Form>

                </Card>
            </Col>
            <Col span={8}>
                <Card title="Wallet" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
}

export default Index