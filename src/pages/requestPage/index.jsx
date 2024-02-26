import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { RequestBidForm, RequestBidList, RequestForm } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRequestById } from "hooks/getRequestHook";
import { useGetRequestBidsByRequestId } from "hooks/requestBidHook";
import styles from './index.module.css'
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "stores/authenticationStore";

const Index = () => {

    const navigate = useNavigate()

    const [pageState, setPageState] = useState(0)

    const refreshPage = () => {
        const newState = pageState + 1

        setPageState(newState)
    }
    const { requestId } = useParams()

    const request = useGetRequestById(requestId, pageState)
    const requestBids = useGetRequestBidsByRequestId(requestId, pageState)

    const account = useAuthenticationStore(state => state.account)


    const showProgressButtonCondition = () => {


        if (isContainUserRole()) {
            return request.user && request.user.login === account.login && request.status !== 'ON_BIDING'
        }


        const selectedBid = requestBids.find(rb => rb.status === 'SELECTED_BID')

        if (selectedBid === undefined) return false
        
        if (isContainCreatorRole()) {
            return selectedBid.user.login === account.login && request.status !== 'ON_BIDING'
        }
    }


    return (
        <>
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
                {(request.user.login !== account.login && isContainCreatorRole() && request.status === 'ON_BIDING') &&
                    <Col span={6} offset={3}>
                        <h2>Place a new request bid</h2>

                        <RequestBidForm refreshPage={refreshPage} requestId={requestId} />

                    </Col>
                }

            </Row>


        </>

    )
}

export default Index