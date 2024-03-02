import React from "react";
import { Button, Col, FloatButton, Row } from "antd";
import { RequestList } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import {
    PlusOutlined
} from '@ant-design/icons';
import { isContainUserRole } from "stores/authenticationStore";

const Index = () => {

    const navigate = useNavigate()
    
    return (
        <>
            {
                isContainUserRole() &&
                <FloatButton onClick={() => navigate('/create-request')} icon={<PlusOutlined />} type="primary" style={{ right: 24 }} />
            }

            <Row align={"middle"}>
                <Col span={12} offset={6}>
                    <RequestList />
                </Col>
            </Row>

        </>

    )
}

export default Index