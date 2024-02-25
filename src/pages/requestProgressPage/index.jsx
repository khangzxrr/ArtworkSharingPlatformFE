import { Button, Col, Form, Row, Space, notification } from "antd";
import React from "react";
import { RequestBidList, RequestForm, RequestTimeline } from "../../components";
import { useParams } from "react-router-dom";
import { useGetRequestById } from "hooks/getRequestHook";
import { useGetRequestBidsByRequestId } from "hooks/requestBidHook";

import styles from './index.module.css'
import { useGetRequestProgresses } from "hooks/requestProgressHook";
import { useGetFirstPayment, useGetSecondPayment } from "hooks/requestPaymentHook";

import { Typography } from 'antd';
import { payFirstPayment, paySecondPayment } from "services/requestPaymentService";
import { userGetCurrentRequestStep } from "services/requestService";

const { Text } = Typography;

const Index = () => {


    const { requestId } = useParams()

    const request = useGetRequestById(requestId)
    const requestBids = useGetRequestBidsByRequestId(requestId)
    const requestProgresses = useGetRequestProgresses(requestId)

    const firstPayment = useGetFirstPayment(requestId)
    const secondPayment = useGetSecondPayment(requestId)

    console.log(requestId)

    function pay() {
        console.log('pay')

        userGetCurrentRequestStep(requestId).then(response => {
            if (response.currentState === 'FIRST_PAYMENT') {
                return payFirstPayment(requestId)
            }

            if (response.currentState == 'SECOND_PAYMENT') {
                return paySecondPayment(requestId)
            }

            

            notification.error({ message: 'request payment', description: 'this is not the correct state to pay request payment!'})
            return true

        }).then(response => {
            if (response.status === 'SUCCEED')
                notification.info({ message: 'Request payment', description: 'payment successfully!' })
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Request payment', description: 'payment failed!\nPlease check your wallet amount and try again\nor you are already paid' })
        })
    }


    return (
        <>
            <Row className={styles.stepLayout}>
                <RequestTimeline requestProgresses={requestProgresses} />
            </Row>
            <Row>
                <Col span={6}>
                    <h1>Request information</h1>
                    <RequestForm request={request} requestBids={requestBids} />
                    <RequestBidList request={request} requestBids={requestBids} />
                </Col>

                {
                    (requestProgresses.length === 0 || requestProgresses.length === 5) &&
                    <>

                        <Col span={6}>
                            <h1>First request payment</h1>
                            <Space direction="vertical">
                                <Text mark>Total you have to pay is {firstPayment.amount}$</Text>
                                <Text>This is 80% of choosed request bid's price</Text>
                                <Button type="primary" block onClick={() => pay()}>
                                    Click here to pay {requestProgresses.length === 0 ? 'first payment' : 'second payment'}
                                </Button>
                            </Space>
                        </Col>
                    </>

                }
                <Col span={6}>
                    <Space direction="vertical">
                        <Form>
                            
                        </Form>
                    </Space>
                </Col>
            </Row>
        </>

    )
}

export default Index