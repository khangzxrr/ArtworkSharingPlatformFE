

import styles from "./index.module.css";
import { dateFormat } from "utils/dateFormat";
import  { CommentOutlined, LikeOutlined } from '@ant-design/icons';
import { Badge, Card, Flex, List, Row, Spin, Typography } from "antd";
import React, {  } from 'react';
import { Link } from "react-router-dom";

const { Text } = Typography;

const Index = (props) => {


  return (
    props.loading ? 
    <Spin /> : 
    <Badge.Ribbon text={props.artwork.category.name} className={styles.artwork}>
      <Card
        title={`${props.artwork.name} by ${props.artwork.owner.login}`}
        className={styles.artwork}
        cover={
          <img
            alt={props.artwork.name}
            className={styles.artworkImage}
            src={props.artwork.artworkAssets.filter(as => as.thumbnail === true)[0].media.url}
          />
        }
      >
        <Row>
          <Text className={styles.description}>
            "{props.artwork.description}" - {dateFormat(props.artwork.createdDate)}
          </Text>

        </Row>
        <List
          dataSource={props.artwork.artworkAssets}
          renderItem={(item, index) => item.thumbnail ? null : (
            <List.Item>
              <Link to={item.media.url} target="_blank">{`attachment ${index}`}</Link>
            </List.Item>
          )}
        />
        <Flex justify='space-around'>
          <div
            style={{ fontSize: '20px' }}
          >
            {props.artwork.commentsCount} <CommentOutlined />
          </div>
          <div
            style={{ fontSize: '20px' }}
          >
            {props.artwork.likesCount} <LikeOutlined style={{ color: props.artwork.userLikedThisArtwork ? '#08c' : '#000' }} />
          </div>
        </Flex>
      </Card>
    </Badge.Ribbon>
  );
};

export default Index;
