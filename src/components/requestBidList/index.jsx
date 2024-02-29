

import { Button, List, notification } from 'antd';
import React from 'react';
import { audienceChooseRequestBid } from '../../services/requestBidService';
import { useAuthenticationStore } from '../../stores/authenticationStore';
import { useNavigate } from 'react-router-dom';
const Index = (props) => {

  const navigate = useNavigate()
  const account = useAuthenticationStore(state => state.account)

  function chooseRequestBid(requestBidId) {
    console.log(requestBidId)
    audienceChooseRequestBid(props.request.id, requestBidId)
    .then(response => {
      notification.info({ message: 'request bid',  description: 'choosed this request bid, you will be redirect soon...'})

      navigate(`/requests/${props.request.id}/progress`)
    })
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
        
          actions={ props.request.user && props.request.user.login === account.login && props.request.status === 'ON_BIDING' ? [<Button type='primary' onClick={() => chooseRequestBid(item.id)}>choose this bid</Button>] : []}
        >
          <List.Item.Meta
            title={`price: ${item.price}$  - ${item.duration} hours ${item.status == 'SELECTED_BID' ? '(Choosed ⭐)' : ''}`}
            description={item.user.login + ": " + item.description}
          />
        </List.Item>
      )}
    />
    </>
    
  );
};

export default Index;
