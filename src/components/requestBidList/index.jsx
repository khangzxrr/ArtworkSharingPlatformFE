

import { Avatar, Button, Card, List, notification } from 'antd';
import React from 'react';
import { audienceChooseRequestBid } from '../../services/requestBidService';
import { useAuthenticationStore } from '../../stores/authenticationStore';
import { useNavigate } from 'react-router-dom';
import { ON_BIDING } from 'models/RequestType';
const Index = (props) => {

  const navigate = useNavigate()
  const account = useAuthenticationStore(state => state.account)

  function chooseRequestBid(requestBidId) {
    console.log(requestBidId)
    audienceChooseRequestBid(props.request.id, requestBidId)
      .then(response => {
        notification.info({ message: 'request deal', description: 'choosed this deal, you will be redirect soon...' })

        navigate(`/requests/${props.request.id}/progress`)
      })
      .catch(err => {
        console.log(err)
        notification.error({ message: 'request deal', description: 'fail to choose this request deal' })
      })
  }

  return (
    <>
      <h1>Request deals</h1>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        dataSource={props.requestBids}
        renderItem={(item) => (
          <List.Item

            actions={props.request.user && props.request.user.login === account.login && props.request.status === ON_BIDING ? [<Button type='primary' onClick={() => chooseRequestBid(item.id)}>choose this deal</Button>] : []}
          >
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg`} />}
              title={`${item.user.login}: Price: ${item.price}$  - ${item.duration} days ${item.status == 'SELECTED_BID' ? '(Choosed ⭐)' : ''}`}
            />
            {item.description}

          </List.Item>
        )}
      />
    </>

  );
};

export default Index;
