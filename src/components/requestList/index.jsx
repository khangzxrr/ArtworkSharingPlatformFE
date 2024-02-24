

import styles from "./index.module.css";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Radio, Space, notification } from 'antd';
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "../../stores/authenticationStore";
import { CREATOR_AUTHORIZE, USER_AUTHORIZE } from "../../utils/constants";
import { creatorGetRequests, userGetRequests } from "../../services/requestService";
import { Link } from "react-router-dom";


const Index = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {


    if (isContainUserRole()) {
      userGetRequests().then(response => {
        setRequests(response.filter(r => r.status == 'ON_BIDING' || r.status == 'ON_GOING'));

      }).catch(error => {
        console.log(error);
        notification.error({ message: 'error getting requests', description: 'Please re-login and try again' });
      });

    } else
      if (isContainCreatorRole()) {
        creatorGetRequests().then(response => {
          setRequests(response.filter(r => r.status == 'ON_BIDING'));

        }).catch(error => {
          console.log(error);
          notification.error({ message: 'error getting requests', description: 'Please re-login and try again' });
        });

      }
  }, [])


  return (
    <>
      <List
        pagination={{
          position: 'bottom',
          align: 'center',
        }}
        dataSource={requests}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<Link to={`/requests/${item.id}`}>{item.title}</Link>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Index;
