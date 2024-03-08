

import React from 'react';
import { Badge, Card, Divider, Flex, List, Row, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom";

import { Typography } from 'antd';

import styles from './index.module.css'
import { dateFormat } from 'utils/dateFormat';
import { Comment } from '@ant-design/compatible';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
const { Text } = Typography;

const Index = (props) => {

  const navigate = useNavigate()


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
              hoverable
              title={`${item.name} by ${item.owner.login}`}
              className={styles.artwork}
              onClick={() => props.isMineArtwork ? navigate(`/artworks/${item.id}/update`) : navigate(`/artworks/${item.id}`)}
              cover={
                <img
                  alt={item.name}
                  className={styles.artworkImage}
                  src={item.artworkAssets.filter(as => as.thumbnail === true)[0].media.url}
                />
              }
            >
              <Row>
                {/* <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                  {item.user.login}
                </Avatar> */}
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
                <div>
                  {item.commentsCount} <CommentOutlined />
                </div>
                <div>
                  {item.likesCount} <LikeOutlined />
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
