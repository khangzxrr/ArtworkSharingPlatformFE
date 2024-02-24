import { Col, Row } from "antd";
import React, { useState } from "react";
import { RequestBidList, RequestForm, RequestTimeline } from "../../components";
import { useParams } from "react-router-dom";
import { useGetRequestById } from "hooks/getRequestHook";
import { useGetRequestBidsByRequestId } from "hooks/requestBidHook";

import styles from './index.module.css'
import { useGetRequestProgresses } from "hooks/requestProgressHook";

const Index = () => {


    const { requestId } = useParams()

    const request = useGetRequestById(requestId)
    const requestBids = useGetRequestBidsByRequestId(requestId)
    const requestProgresses = useGetRequestProgresses(requestId)

    console.log(requestId)


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