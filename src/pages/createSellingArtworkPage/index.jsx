import React, { useEffect } from "react";
import { Col, Row, notification } from "antd";
import styles from './index.module.css'
import { ArtworkComponent, CreateArtworkSellingForm } from "components";
import { useNavigate, useParams } from "react-router-dom";
import { useArtworkDetailStore } from "stores/artworkDetailStore";


const Index = () => {

    const { artworkId } = useParams()

    const navigate = useNavigate()

    const artwork = useArtworkDetailStore(state => state.artwork)
    const loading = useArtworkDetailStore(state => state.loading)
    const fetchArtwork = useArtworkDetailStore(state => state.fetchArtwork)

    useEffect(() => {
        fetchArtwork(artworkId)
    }, [artworkId])

    useEffect(() => {
        if (artwork.onGoingArtworkSelling !== null) {
            notification.error({ message: 'artwork selling', description:'This artwork has on-going selling, please check again'})
            navigate('/mine/artworks')
        }
    }, [artwork])

    return (
        <Row className={styles.requestForm}>
            <Col span={6}>
                <ArtworkComponent loading={loading} artwork={artwork} />
            </Col>
            <Col span={10}>
                <CreateArtworkSellingForm />
            </Col>
        </Row>

    )
}

export default Index