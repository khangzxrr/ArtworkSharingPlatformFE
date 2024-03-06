

import React, { useEffect } from 'react';
import { Avatar, Badge, Card, List, Row } from 'antd';
import { useNavigate } from "react-router-dom";

import { Typography } from 'antd';

import styles from './index.module.css'
import { dateFormat } from 'utils/dateFormat';
import { useArtworkListStore } from 'stores/artworkListStore';

const { Text } = Typography;

const Index = () => {

  const navigate = useNavigate()

  const artworkListStore = useArtworkListStore()


  useEffect(() => {
    artworkListStore.fetchArtworks()
  }, [])


  return (
    <>
      <List
        pagination={{
          total: 0,
          defaultCurrent: 1,
          position: 'bottom',
          align: 'center',
        }}
        dataSource={artworkListStore.artworks}
        rowKey={(item) => item.id}
        renderItem={(item, index) => (
          <Badge.Ribbon text={item.status}>
            <Card hoverable title={item.title} className={styles.request} onClick={() => navigate(`/requests/${item.id}`)}>
              <Row>
                {/* <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                  {item.user.login}
                </Avatar> */}
                <Text className={styles.description}>
                  "{item.description}" - {dateFormat(item.createdDate)}
                </Text>

              </Row>
            </Card>
          </Badge.Ribbon>

        )}
      />
    </>
  );
};

export default Index;
