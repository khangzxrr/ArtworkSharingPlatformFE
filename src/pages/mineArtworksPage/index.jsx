import React, { useEffect } from "react";
import { Col, FloatButton, Row } from "antd";
import { ArtworkList } from "../../components";
import { useNavigate } from "react-router-dom";
import {
    PlusOutlined
} from '@ant-design/icons';
import { isContainCreatorRole } from "stores/authenticationStore";
import { useMineArtworkListStore } from "stores/mimeArtworkListStore";

const Index = () => {

    const navigate = useNavigate()

    const mineArtworkListStore = useMineArtworkListStore();

    useEffect(() => {
        mineArtworkListStore.fetchArtworks()
    }, [])

    return (
        <>
            {
                isContainCreatorRole() &&
                <FloatButton onClick={() => navigate('/artworks/create')} icon={<PlusOutlined />} type="primary" style={{ right: 24 }} />
            }

            <h1>My artworks</h1>

            <Row align={"middle"}>
                <Col offset={6}>
                    <ArtworkList isMineArtwork={true} artworks={mineArtworkListStore.artworks} />
                </Col>
            </Row>

        </>

    )
}

export default Index