

import styles from "./index.module.css";
import { dateFormat } from "utils/dateFormat";
import { CommentOutlined, LikeOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Flex, List, Row, Spin, Typography } from "antd";
import React, { } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArtworkDirectBuyConfirmBox } from "components";
import { useAuthenticationStore } from "stores/authenticationStore";

const { Text } = Typography;

const Index = (props) => {

  const account = useAuthenticationStore(state => state.account)

  const navigate = useNavigate()

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

          {
            props.artwork.onGoingArtworkSelling !== null &&
            <Flex justify="space-around" align="center">
              <h2>On sales: ${props.artwork.onGoingArtworkSelling.expectedSellingPrice}</h2>
              <h2>Sale method: {props.artwork.onGoingArtworkSelling.type}</h2>

              {
                account.login != props.artwork.owner.login &&
                <ArtworkDirectBuyConfirmBox artwork={props.artwork} />
              }

            </Flex>

          }

          {
            props.artwork.onGoingArtworkSelling === null && props.showSellButton &&
            <Flex justify="space-around" align="center" style={{ margin: 10 }}>
              <Button onClick={() => { navigate(`/mine/artworks/${props.artwork.id}/sellings/create`) }} >Sell now</Button>
            </Flex>
          }
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
