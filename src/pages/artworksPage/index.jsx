import React, { useEffect } from "react";
import { Col, Row, Card } from "antd";
import { ArtworkList } from "../../components";
import { useArtworkListStore } from "stores/artworkListStore";

const Index = () => {

    const artworkListStore = useArtworkListStore()


    useEffect(() => {
        artworkListStore.fetchArtworks()
    }, [])

    return (
      <>
        <Row align={"middle"}>
          <Col></Col>
        </Row>
        <Card
          bordered={false}
          className="header-solid mb-24"
          title={
            <>
              <h2 className="font-semibold">Public artworks</h2>
            </>
          }
        >
          <Row>
            <ArtworkList
              artworks={artworkListStore.artworks}
              totalCount={artworkListStore.totalCount}
            />
          </Row>
        </Card>
      </>
    );
}

export default Index