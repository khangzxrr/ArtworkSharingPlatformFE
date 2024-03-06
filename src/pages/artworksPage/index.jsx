import React from "react";
import { Col, FloatButton, Row } from "antd";
import { ArtworkList, RequestList } from "../../components";
import { useNavigate } from "react-router-dom";
import {
    PlusOutlined
} from '@ant-design/icons';
import { isContainCreatorRole } from "stores/authenticationStore";

const Index = () => {

    const navigate = useNavigate()

    return (
        <>
            {
                isContainCreatorRole() &&
                <FloatButton onClick={() => navigate('/create-artwork')} icon={<PlusOutlined />} type="primary" style={{ right: 24 }} />
            }

            <Row align={"middle"}>
                <Col span={12} offset={6}>
                    <ArtworkList />
                </Col>
            </Row>

        </>

    )
}

export default Index