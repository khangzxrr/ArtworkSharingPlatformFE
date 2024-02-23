

import { List, notification } from 'antd';
import React, { useEffect } from 'react';
import { audienceChooseRequestBid } from '../../services/requestBidService';
import styles from "./index.module.css";
const Index = (props) => {


  function chooseRequestBid(requestBidId) {
    console.log(requestBidId)
    audienceChooseRequestBid(props.request.id, requestBidId)
    .then(response => notification.info({ message: 'request bid',  description: 'choosed this request bid, you will be redirect soon...'}))
    .catch(err => {
      console.log(err)
      notification.error({ message: 'request bid', description: 'fail to choose this request bid'})
    })
  }

  return (
    <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      dataSource={props.requestBids}
      renderItem={(item) => (
        <List.Item
        
          actions={props.request.user.login == props.account.login && props.request.status === 'ON_BIDING' ? [<a onClick={() => chooseRequestBid(item.id)}>choose this bid</a>] : []}
        >
          <List.Item.Meta
            //avatar={<Avatar src={item.picture.large} />}
            title={`price: ${item.price} duration: ${item.duration} hours (${item.status == 'SELECTED_BID' ? 'Choosed' : ''})`}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default Index;
