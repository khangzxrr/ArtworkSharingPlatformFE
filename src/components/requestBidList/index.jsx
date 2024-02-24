

import { List, notification } from 'antd';
import React from 'react';
import { audienceChooseRequestBid } from '../../services/requestBidService';
import { useAuthenticationStore } from '../../stores/authenticationStore';
const Index = (props) => {

  
  const account = useAuthenticationStore(state => state.account)

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
    <>
    <h1>Request bids</h1>
    <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      dataSource={props.requestBids}
      renderItem={(item) => (
        <List.Item
        
          actions={ props.request.user && props.request.user.login === account.login && props.request.status === 'ON_BIDING' ? [<a onClick={() => chooseRequestBid(item.id)}>choose this bid</a>] : []}
        >
          <List.Item.Meta
            title={`price: ${item.price} duration: ${item.duration} hours (${item.status == 'SELECTED_BID' ? 'Choosed' : ''})`}
            description={item.description}
          />
        </List.Item>
      )}
    />
    </>
    
  );
};

export default Index;
