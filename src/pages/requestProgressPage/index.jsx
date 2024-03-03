import { Button, Col, Divider, FloatButton, Form, Popconfirm, Row, Space, notification } from "antd";
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
import { audienceRefund, userGetCurrentRequestStep } from "services/requestService";
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "stores/authenticationStore";
import { SELECTED_BID } from "models/RequestBidStatus";
import { ENDED, FAILED, ON_BIDING, ON_PAYING_FIRST, ON_PAYING_SECOND, ON_REPORTING } from "models/RequestType";

import SockJsClient from 'react-stomp'
import { BASE_WEBSOCKET_URL } from 'utils/constants';
import { FIRST_PAYMENT } from "models/RequestProgressTypes";
import moment from "moment";
import { translateErrorToNotify } from "utils/errorHandle";


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

    function calculateDeadlineDay() {

        const selectedBid = requestBids.find(rb => rb.status === SELECTED_BID)

        const firstPayment = requestProgresses.find(rp => rp.type === FIRST_PAYMENT)

        if (selectedBid == undefined || firstPayment == undefined) {
            return 'Deadline date will be calculate when paid first payment'
        }

        console.log(selectedBid, firstPayment)

        const deadLineDay = moment(firstPayment.createdDate).add(selectedBid.duration, 'days')

        return 'Request will close at ' + deadLineDay.format('MMMM Do YYYY, h:mm:ss a')
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
//choose bid higher wallet
    const onReceivingMessage = (msg) => {
        notification.info({ message: 'request update', description: 'there is a new update about this request' })
        refreshPage()
    }


    const refund = () => {
        audienceRefund(requestId).then(response => {
            notification.success({ message: 'refund', description: `refund successfully! days passed: ${response.dayPassed}, refund amount: ${response.refundAmount}$`, duration: 0 },)
            refreshPage()
        })
            .catch(error => translateErrorToNotify(error))
    }

    return (
        <>
            <SockJsClient
                url={BASE_WEBSOCKET_URL + `?access_token=${accessToken}`}
                topics={[`/topic/requests/${requestId}/notification`]}
                onMessage={(msg) => onReceivingMessage(msg)}
            />
            <Row justify='center'>
                <h1>{calculateDeadlineDay()}</h1>
            </Row>
            <Row className={styles.stepLayout}>
                <RequestTimeline requestProgresses={requestProgresses} request={request} />
            </Row>
            <Row>
                <Col span={12} className={styles.component}>
                    <h1>Request information</h1>
                    <RequestForm request={request} requestBids={requestBids} />
                    {
                        request.status !== FAILED && request.status !== ENDED && request.status !== ON_BIDING && request.status !== ON_PAYING_FIRST &&
                        <Popconfirm
                            title="Refund and Close request"
                            description="Are you sure to close and refund this request ? (you CANNOT undo)"
                            onConfirm={refund}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Cancel & refund</Button>
                        </Popconfirm>
                    }

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

                            <Popconfirm
                                title={requestProgresses.length === 0 ? 'First payment' : 'Fecond payment'}
                                description="Are you sure to pay payment?"
                                onConfirm={pay}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button block type="primary">Click here to pay {requestProgresses.length === 0 ? 'first payment' : 'second payment'}</Button>
                            </Popconfirm>
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