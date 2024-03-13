

import React from 'react';
import { Badge, Button, Card, Flex, List, Row } from 'antd';
import { Link, useNavigate } from "react-router-dom";

import { Typography } from 'antd';

import styles from './index.module.css'
import { dateFormat } from 'utils/dateFormat';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { useArtworkListStore } from 'stores/artworkListStore';
const { Text } = Typography;

const Index = (props) => {

  const navigate = useNavigate()

  const artworkListStore = useArtworkListStore()

  return (
    <>
      <List
        pagination={{
          total: props.totalCount,
          defaultCurrent: 1,
          position: 'bottom',
          align: 'center',
        }}
        dataSource={props.artworks}
        rowKey={(item) => item.id}
        renderItem={(item, index) => (
          <Badge.Ribbon text={item.category.name} className={styles.artwork}>
            <Card
              actions={props.isMineArtwork ?
                [
                  <Button type='primary' onClick={() => navigate(`${item.id}/sellings/create`)}>Sell this artwork</Button>
                  // <Button >Buy this artwork</Button>
                ] : []}
              title={`${item.name} by ${item.owner.login}`}
              className={styles.artwork}
              cover={
                <img
                  onClick={() => props.isMineArtwork ? navigate(`/artworks/${item.id}/update`) : navigate(`/artworks/${item.id}`)}
                  alt={item.name}
                  className={styles.artworkImage}
                  src={item.artworkAssets.filter(as => as.thumbnail === true)[0].media.url}
                />
              }
            >
              <Row>
                <Text className={styles.description}>
                  "{item.description}" - {dateFormat(item.createdDate)}
                </Text>

              </Row>
              <List
                dataSource={item.artworkAssets}
                renderItem={(item, index) => item.thumbnail ? null : (
                  <List.Item>
                    <Link to={item.media.url} target="_blank">{`attachment ${index}`}</Link>
                  </List.Item>
                )}
              />
              <Flex justify='space-around'>
                <div
                  style={{ fontSize: '20px' }}
                  onClick={() => props.isMineArtwork ? navigate(`/artworks/${item.id}/update`) : navigate(`/artworks/${item.id}`)}
                >
                  {item.commentsCount} <CommentOutlined />
                </div>
                <div
                  style={{ fontSize: '20px' }}
                  onClick={() => item.userLikedThisArtwork ? artworkListStore.unlikeArtworkById(item.id) : artworkListStore.likeArtworkById(item.id)}
                >
                  {item.likesCount} <LikeOutlined style={{ color: item.userLikedThisArtwork ? '#08c' : '#000' }} />
                </div>
              </Flex>
            </Card>
          </Badge.Ribbon>

        )}
      />
    </>
  );
};

export default Index;
