import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "antd";
import { RequestBidForm, RequestBidList, RequestForm } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

import styles from './index.module.css'
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "stores/authenticationStore";
import { ON_BIDING } from "models/RequestType";
import { SELECTED_BID } from "models/RequestBidStatus";
import SockJsClient from 'react-stomp'
import { BASE_WEBSOCKET_URL } from "utils/constants";
import { useRequestDetailStore } from "stores/requestDetailStore";
import { translateErrorToNotify } from "utils/errorHandle";
import { useRequestBidStore } from "stores/requestBidStore";

const Index = () => {

    const navigate = useNavigate()

    const socketClientRef = useRef(null)

    const { requestId } = useParams()

    const requestDetailStore = useRequestDetailStore()
    const request = useRequestDetailStore(state => state.request)

    const requestBidStore = useRequestBidStore()
    const requestBids = useRequestBidStore(state => state.requestBids)


    useEffect(() => {
        requestDetailStore.fetchRequestById(requestId)
            .catch(error => translateErrorToNotify(error))
    }, [requestId])

    useEffect(() => {
        requestBidStore.fetchRequestBidsByRequestId(requestId)
            .catch(error => translateErrorToNotify(error))
    }, [request])


    const account = useAuthenticationStore(state => state.account)
    const accessToken = useAuthenticationStore(state => state.accessToken)


    const showProgressButtonCondition = () => {

        if (isContainUserRole()) {
            return request.user && request.user.login === account.login && request.status !== ON_BIDING
        }

        const selectedBid = requestBids.find(rb => rb.status === SELECTED_BID)

        if (selectedBid === undefined) return false

        console.log(selectedBid)

        if (isContainCreatorRole()) {
            return selectedBid.user.login === account.login && request.status !== ON_BIDING
        }
    }

    const onReceivingMessage = (msg) => {
        setTimeout(() => {
            requestDetailStore.fetchRequestById(requestId)
                .catch(error => translateErrorToNotify(error))
        }, 2000)
    }


    return (
        <>
            <SockJsClient
                url={BASE_WEBSOCKET_URL + `?access_token=${accessToken}`}
                topics={[`/topic/requests/${requestId}/notification`]}
                onMessage={(msg) => onReceivingMessage(msg)}
                ref={(client) => { socketClientRef.current = client }}
            />
            <Row className={styles.requestForm}>
                <Col span={16} offset={3}>
                    <RequestForm request={request} requestBids={requestBids} />
                </Col>

                {
                    showProgressButtonCondition() &&
                    <Col span={4}>
                        <Button type="primary" onClick={() => navigate('progress')}>Go to progress page</Button>
                    </Col>
                }

            </Row>
            <Row>
                <Col span={6} offset={3}>
                    <RequestBidList request={request} requestBids={requestBids} />
                </Col>
                {(request.user.login !== account.login && isContainCreatorRole() && request.status === ON_BIDING) &&
                    <Col span={6} offset={3}>
                        <h2>Place a new deal</h2>

                        <RequestBidForm requestId={requestId} />

                    </Col>
                }

            </Row>


        </>

    )
}

export default Index