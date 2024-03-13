

import React from 'react';
import { List } from 'antd';

import { Typography } from 'antd';

import { ArtworkComponent } from 'components';
const { Text } = Typography;

const Index = (props) => {

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
          <ArtworkComponent
            loading={false}
            artwork={item}
            showSellButton={props.showSellButton}
            showAuctionPage={props.showAuctionPage} />

        )}
      />
    </>
  );
};

export default Index;
