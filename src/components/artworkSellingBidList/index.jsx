

import React from 'react';
import { Col, Flex, Form, List, Row } from 'antd';

import { Typography } from 'antd';
import { useSellingAuctionStore } from 'stores/sellingAuctionStore';

const { Text } = Typography;

const Index = () => {


  const bids = useSellingAuctionStore(state => state.bids)


  return (
    <List
      dataSource={bids}
      rowKey={(item) => item.id}
      renderItem={(item, index) => (
        <Flex style={{ margin: 8 }}>
          <Text>user: {item.bidder.login}  - bid price: ${item.bidPrice}</Text>
        </Flex>

      )}
    >

    </List>
  );
};

export default Index;
