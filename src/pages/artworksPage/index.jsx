import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { ArtworkList } from "../../components";
import { useArtworkListStore } from "stores/artworkListStore";

const Index = () => {

    const artworkListStore = useArtworkListStore()


    useEffect(() => {
        artworkListStore.fetchArtworks()
    }, [])

    return (
        <>
            <h1>Public artworks</h1>

            <Row align={"middle"}>
                <Col >
                    <ArtworkList  artworks={artworkListStore.artworks} totalCount={artworkListStore.totalCount} />
                </Col>
            </Row>

        </>

    )
}

export default Index