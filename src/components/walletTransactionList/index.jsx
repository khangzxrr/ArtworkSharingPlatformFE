

import React, { } from 'react';
import { Table, Tag } from 'antd';

const Index = (props) => {

  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (_, { amount }) => {
        return amount + ' $'
      }
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (_, { type }) => {
        let color = 'green'
        if (type == 'REFUND') color = 'orange'
        if (type == 'WITHDRAW_REQUEST_FIRST_PAYMENT_TEMP') color = 'red'
        return (
          <Tag color={color}>
            {type}
          </Tag>
        )
      }
    },
    {
      title: 'Created at',
      dataIndex: 'createAt',
      key: 'createAt',
    },
  ]
  
  return (
    <Table dataSource={props.walletTransactions} columns={columns}>

    </Table>
  );
};

export default Index;
