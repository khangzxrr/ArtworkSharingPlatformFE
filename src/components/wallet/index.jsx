

import React, { } from 'react';
import { Card, Descriptions, Divider, Form } from 'antd';

const Index = (props) => {


  return (
    <Card title="Wallet" bordered={false}>
      <Descriptions title="Request information">
        <Descriptions.Item label="Wallet amount">{props.wallet.amount}$</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default Index;
