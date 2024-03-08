import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { ArtworkList } from "../../components";
import { useNavigate } from "react-router-dom";
import { useArtworkListStore } from "stores/artworkListStore";

const Index = () => {

    const artworkListStore = useArtworkListStore()


    useEffect(() => {
        artworkListStore.fetchArtworks()
    }, [])

    const navigate = useNavigate()

    return (
        <>
            <h1>Public artworks</h1>

            <Row align={"middle"}>
                <Col >
                    <ArtworkList totalCount={artworkListStore.totalCount} artworks={artworkListStore.artworks} />
                </Col>
            </Row>

        </>

    )
}

export default Index