import React from "react";
import { Button } from "antd";
import { RequestForm, RequestList } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useGetRequestById } from "hooks/getRequestHook";

const Index = () => {
    const { requestId } = useParams()

    const request = useGetRequestById(requestId)
    return (
        <>
            <RequestForm request={request} />
        </>

    )
}

export default Index