import { Button, Col, Form, Row, Space, notification } from "antd";
import React, { useState } from "react";
import { RequestBidList, RequestChatBox, RequestForm, RequestProgressList, RequestProgressReportForm, RequestTimeline } from "../../components";
import { useParams } from "react-router-dom";
import { useGetRequestById } from "hooks/getRequestHook";
import { useGetRequestBidsByRequestId } from "hooks/requestBidHook";

import styles from './index.module.css'
import { useGetRequestProgresses } from "hooks/requestProgressHook";
import { useGetFirstPayment, useGetSecondPayment } from "hooks/requestPaymentHook";

import { Typography } from 'antd';
import { payFirstPayment, paySecondPayment } from "services/requestPaymentService";
import { userGetCurrentRequestStep } from "services/requestService";
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "stores/authenticationStore";
import { SELECTED_BID } from "models/RequestBidStatus";
import { ON_PAYING_FIRST, ON_PAYING_SECOND, ON_REPORTING } from "models/RequestType";

import SockJsClient from 'react-stomp'
import { BASE_WEBSOCKET_URL } from 'utils/constants';

const { Text } = Typography;

const Index = () => {

    const [pageState, setPageState] = useState(0)

    const refreshPage = () => {

        const newPageState = pageState + 1
        setPageState(newPageState)

        console.log('refresh page ', newPageState)
    }

    const { requestId } = useParams()

    const request = useGetRequestById(requestId, pageState)
    const requestBids = useGetRequestBidsByRequestId(requestId, pageState)
    const requestProgresses = useGetRequestProgresses(requestId, pageState)

    const firstPayment = useGetFirstPayment(requestId, pageState)
    const secondPayment = useGetSecondPayment(requestId, pageState)

    const account = useAuthenticationStore(state => state.account)

    const accessToken = useAuthenticationStore(state => state.accessToken)

    function displayPaymentFormCondition() {
        return (request.status === ON_PAYING_FIRST || request.status === ON_PAYING_SECOND) &&
            isContainUserRole() && request.user.login == account.login

    }

    function displayRequestReportFormCondition() {

        const selectedBid = requestBids.find(rb => rb.status === SELECTED_BID)

        if (selectedBid === undefined) return false

        return isContainCreatorRole() &&
            selectedBid.user.login === account.login &&
            (request.status == ON_REPORTING || request.status == ON_PAYING_SECOND)

    }


    function pay() {
        console.log('pay')

        userGetCurrentRequestStep(requestId).then(response => {
            if (response.currentState === 'FIRST_PAYMENT') {
                return payFirstPayment(requestId)
            }

            if (response.currentState === 'SECOND_PAYMENT') {
                return paySecondPayment(requestId)
            }

            notification.error({ message: 'request payment', description: 'this is not the correct state to pay request payment!' })
            return true

        }).then(response => {
            if (response.status === 'SUCCEED')
                notification.info({ message: 'Request payment', description: 'payment successfully!' })

        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Request payment', description: 'payment failed!\nPlease check your wallet amount and try again\nor you are already paid' })
        }).finally(() => {
            refreshPage()
        })
    }

    const onReceivingMessage = (msg) => {
        notification.info({ message: 'request update', description: 'there is a new update about this request'})
        refreshPage()
    }


    return (
        <>
            <SockJsClient
                url={BASE_WEBSOCKET_URL + `?access_token=${accessToken}`}
                topics={[`/topic/requests/${requestId}/notification`]}
                onMessage={(msg) => onReceivingMessage(msg)}
            />
            <Row className={styles.stepLayout}>
                <RequestTimeline requestProgresses={requestProgresses} />
            </Row>
            <Row>
                <Col span={12} className={styles.component}>
                    <h1>Request information</h1>
                    <RequestForm request={request} requestBids={requestBids} />
                    <RequestBidList request={request} requestBids={requestBids} />
                </Col>

                <Col span={10} className={styles.component}>
                    <h1>Chatbox</h1>
                    <RequestChatBox requestId={requestId} request={request} />
                </Col>
            </Row>
            <Row>
                {
                    displayPaymentFormCondition() &&
                    <Col span={6} className={styles.component}>
                        <h1>Payment</h1>
                        <Space direction="vertical">
                            <Text mark>Total you have to pay is {requestProgresses.length === 0 ? firstPayment.amount : secondPayment.amount}$</Text>
                            {requestProgresses.length === 0 ? <Text>This is 80% of choosed request bid's price</Text> : <Text>This is 20% of choosed request bid's price and 5% platform service fee</Text>}
                            <Button type="primary" block onClick={() => pay()}>
                                Click here to pay {requestProgresses.length === 0 ? 'first payment' : 'second payment'}
                            </Button>
                        </Space>
                    </Col>

                }

                <Col span={5} className={styles.component}>
                    <h1>Request progress list</h1>
                    <RequestProgressList refreshPage={refreshPage} requestId={requestId} requestProgresses={requestProgresses} />
                </Col>

                {
                    displayRequestReportFormCondition() &&
                    <Col span={6} className={styles.component}>
                        <h1>Upload request progress</h1>
                        <RequestProgressReportForm refreshPage={refreshPage} requestId={requestId} />
                    </Col>
                }

            </Row>
        </>

    )
}

export default Index