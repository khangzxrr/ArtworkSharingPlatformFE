import React, { } from "react";
import { Col, Row } from "antd";
import styles from './index.module.css'
import { UpdateArtworkForm } from "components";

const Index = () => {

    return (
        <Row className={styles.requestForm}>
            <Col span={6} offset={8}>
                <UpdateArtworkForm />
            </Col>
        </Row>

    )
}

export default Index