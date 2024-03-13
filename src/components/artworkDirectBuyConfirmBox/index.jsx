

import styles from "./index.module.css";
import { dateFormat } from "utils/dateFormat";
import { CommentOutlined, LikeOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Flex, List, Popconfirm, Row, Spin, Typography, notification } from "antd";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AUCTION, AUCTION_EXPECTED_PRICE, DIRECT } from "models/ArtworkSellingType";
import { buyArtwork } from "services/artworkSellingService";
import { translateErrorToNotify } from "utils/errorHandle";

const { Text } = Typography;

const Index = (props) => {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const showPopconfirm = () => {
    setOpen(true)
  }

  const buyNow = () => {

    setLoading(true)

    if (props.artwork.onGoingArtworkSelling.type === DIRECT) {
      // do direct buy
      buyArtwork(props.artwork.onGoingArtworkSelling.id, props.artwork.id).then(() => {
        notification.success({ message: "Artwork bought successfully", description: "You have successfully bought the artwork!"})
        navigate('/mine/artworks')

      })
      .catch((err) => {
        
        translateErrorToNotify(err)
      })
      .finally(() => {
        setLoading(false)
        setOpen(false)
      })
    }
    else
      if (props.artwork.onGoingArtworkSelling.type === AUCTION || props.onGoingArtworkSelling.type === AUCTION_EXPECTED_PRICE) {
        notification.error({ message: "Artwork buying", description: "This artwork is in auction, please go to auction page to buy" })
      }

  }

  return <Popconfirm
    title="Artwork buying confirmation"
    okButtonProps={{ loading: loading }}
    open={open}
    onConfirm={buyNow}
    description={`Do you wish to buy this artwork with $${props.artwork.onGoingArtworkSelling.expectedSellingPrice}`}
  > <Button type="primary" onClick={showPopconfirm}>Buy now</Button></Popconfirm>
};

export default Index;
