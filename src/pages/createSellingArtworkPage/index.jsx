import React, { useEffect } from "react";
import { Col, Row } from "antd";
import styles from './index.module.css'
import { ArtworkComponent, CreateArtworkSellingForm } from "components";
import { useParams } from "react-router-dom";
import { useArtworkDetailStore } from "stores/artworkDetailStore";


const Index = () => {

    const { artworkId } = useParams()

    const artwork = useArtworkDetailStore(state => state.artwork)
    const loading = useArtworkDetailStore(state => state.loading)
    const fetchArtwork = useArtworkDetailStore(state => state.fetchArtwork)

    useEffect(() => {
        fetchArtwork(artworkId)
    }, [artworkId])

    return (
        <Row className={styles.requestForm}>
            <Col span={6}>
                <ArtworkComponent loading={loading} artwork={artwork} />
            </Col>
            <Col span={6}>
                <CreateArtworkSellingForm />
            </Col>
        </Row>

    )
}

export default Index