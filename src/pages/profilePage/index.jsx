import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Descriptions,
  Avatar,
} from "antd";

import { useAuthenticationStore } from "stores/authenticationStore";
import { PaypalDeposit, WalletTransactionList } from "components";
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
      <>
        <div
          className="profile-nav-bg"
          style={{
            backgroundImage:
              "url(background.jpg)",
          }}
        ></div>

        <Card
          className="card-profile-head"
          bodyStyle={{ display: "none" }}
          title={
            <Row justify="space-between" align="middle" gutter={[24, 0]}>
              <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                  <Avatar
                    size={74}
                    shape="square"
                    src="avatar.jpg"
                  />

                  <div className="avatar-info">
                    <h4 className="font-semibold m-0">{account.firstName}</h4>
                    <p>{account.email}</p>
                  </div>
                </Avatar.Group>
              </Col>
              <Col
                span={24}
                md={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
              </Col>
            </Row>
          }
        ></Card>

        <Row gutter={[24, 0]}>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Profile Information</h6>}
              className="header-solid h-full card-profile-information"
              extra={
                <Button type="link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={0}
                  >
                    <path
                      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                      className="fill-gray-7"
                    ></path>
                    <path
                      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                      className="fill-gray-7"
                    ></path>
                  </svg>
                  ,
                </Button>
              }
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <hr className="my-25" />
              <Descriptions title="">
                <Descriptions.Item label="Full Name" span={3}>
                  {account.firstName + " " +  account.lastName}
                </Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>
                  {account.email}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">Paypal Deposit </h6>}
              className="header-solid h-full card-profile-information"
              extra={
                <Button type="link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={0}
                  >
                    <path
                      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                      className="fill-gray-7"
                    ></path>
                    <path
                      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                      className="fill-gray-7"
                    ></path>
                  </svg>
                  ,
                </Button>
              }
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              {/* <Wallet wallet={wallet} /> */}
              {/* <Divider /> */}
              <p className="text-dark">
                <Descriptions.Item label="Wallet amount">
                  {wallet.amount}$
                </Descriptions.Item>
              </p>
              <hr className="my-25" />
              <PaypalDeposit reloadWallet={reloadWallet} />
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered={false}
              title={
                <h6 className="font-semibold m-0">Wallet Transactions </h6>
              }
              className="header-solid h-full card-profile-information"
              extra={
                <Button type="link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={0}
                  >
                    <path
                      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                      className="fill-gray-7"
                    ></path>
                    <path
                      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                      className="fill-gray-7"
                    ></path>
                  </svg>
                  ,
                </Button>
              }
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <p></p>
              <WalletTransactionList walletTransactions={walletTransactions} />
            </Card>
          </Col>
        </Row>
        {/* <Row gutter={16}>
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
        </Row> */}
      </>
    );
}

export default Index