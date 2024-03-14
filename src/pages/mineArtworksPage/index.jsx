import React, { useEffect } from "react";
import { Col, FloatButton, Row, Card } from "antd";
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
      {isContainCreatorRole() && (
        <FloatButton
          onClick={() => navigate("/artworks/create")}
          icon={<PlusOutlined />}
          type="primary"
          style={{ right: 24 }}
        />
      )}
      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h2 className="font-semibold">My artworks</h2>
          </>
        }
      >
        <Row>
          <ArtworkList
            isMineArtwork={true}
            artworks={mineArtworkListStore.artworks}
          />
        </Row>
      </Card>
    </>
  );
}

export default Index