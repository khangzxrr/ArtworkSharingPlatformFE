import React, { useState } from "react";
import { Card, Col, Divider, Row } from "antd";
import {
    Form,
    Input,
} from 'antd';
import { useAuthenticationStore } from "stores/authenticationStore";
import { PaypalDeposit, Wallet, WalletTransactionList } from "components";
import { useGetWallet, useGetWalletTransactions } from "hooks/walletHook";

const Index = () => {

    const [refreshWallet, setRefreshWallet] = useState(0)

    const account = useAuthenticationStore(state => state.account)

    const wallet = useGetWallet(refreshWallet)
    const walletTransactions = useGetWalletTransactions(refreshWallet)

    const reloadWallet = () => {
        const newValue = refreshWallet + 1
        setRefreshWallet(newValue)
    }

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
                <Wallet wallet={wallet} />
                <Divider />
                <WalletTransactionList walletTransactions={walletTransactions} />
            </Col>
            <Col span={8}>
                <PaypalDeposit reloadWallet={reloadWallet} />
            </Col>
        </Row>
    )
}

export default Index