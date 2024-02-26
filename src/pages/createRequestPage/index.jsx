import React, { } from "react";
import { CreateRequestForm } from "../../components";
import { Col, Row } from "antd";
import styles from './index.module.css'

const Index = () => {

    return (
        <Row className={styles.requestForm}>
            <Col span={6} offset={8}>
                <CreateRequestForm />
            </Col>
        </Row>

    )
}

export default Index