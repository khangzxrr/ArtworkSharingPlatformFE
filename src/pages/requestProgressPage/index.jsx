import { Col, Row, Space, Timeline, notification } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { RequestForm, RequestTimeline } from "../../components";
import { creatorGetRequestBidsOfRequest, userGetRequestBidsOfRequest } from "../../services/requestBidService";
import styles from './index.module.css'
import { getAllRequestProgressByRequestId } from "../../services/requestProgressService";
import { useParams } from "react-router-dom";
import { isContainCreatorRole, isContainUserRole } from "../../stores/authenticationStore";
import { creatorGetRequest, userGetRequest } from "../../services/requestService";

const Index = () => {

    function notifyError(err) {
        console.log(err)
        notification.error({ message: 'Get request', description: 'Failed to get request, please try again' })
    }

    const { requestId } = useParams()

    const [request, setRequest] = useState({})
    const [requestBids, setRequestBids] = useState([])

    const [requestProgresses, setRequestProgresses] = useState([])

    function setRequestData(requestData) {
        setRequest(requestData)
      }

    useEffect(() => {

        if (isContainUserRole()) {
            userGetRequest(requestId)
                .then(response => {
                    setRequestData(response)

                    return userGetRequestBidsOfRequest(requestId)
                })
                .then(response => {
                    setRequestBids(response)
                })
                .catch(error => notifyError(error))

        } else
            if (isContainCreatorRole()) {
                creatorGetRequest(requestId)
                    .then(response => {
                        setRequestData(response)

                        return creatorGetRequestBidsOfRequest(requestId)
                    })
                    .then(response => {
                        setRequestBids(response)
                    })
                    .catch(error => notifyError(error))
            }

        getAllRequestProgressByRequestId(requestId)
            .then(response => setRequestProgresses(response))
            .catch(error => {
                console.log(error)
                notification.error({ message: 'Get request progress', description: 'Error while getting request progresses. please try again' })
            })
    }, [])

    return (
        <>
            <Row className={styles.stepLayout}>
                <RequestTimeline requestProgresses={requestProgresses} />
            </Row>
            <Row>
                <Col span={6}>
                    <h1>Request information</h1>
                    <RequestForm request={request} requestBids={requestBids} />
                </Col>
                {
                    (requestProgresses.length == 0) &&
                    <Col span={6}>
                        <h1>Request payment</h1>

                    </Col>
                }
            </Row>
        </>

    )
}

export default Index