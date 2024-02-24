import React from "react";
import { Button } from "antd";
import { RequestBidList, RequestForm, RequestList } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useGetRequestById } from "hooks/getRequestHook";
import { useGetRequestBidsByRequestId } from "hooks/requestBidHook";
import { useAuthenticationStore } from "stores/authenticationStore";

const Index = () => {
    const { requestId } = useParams()

    
    const request = useGetRequestById(requestId)
    const requestBids = useGetRequestBidsByRequestId(requestId)

    return (
        <>
            <RequestForm request={request} requestBids={requestBids} />
            <RequestBidList request={request} requestBids={requestBids}  />
        </>

    )
}

export default Index