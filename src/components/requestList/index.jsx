

import styles from "./index.module.css";
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Radio, Space, notification } from 'antd';
import { useAuthenticationStore } from "../../stores/authenticationStore";
import { USER_AUTHORIZE } from "../../utils/constants";
import { userGetRequests } from "../../services/requestService";
import { Link } from "react-router-dom";


const Index = () => {

  const role = useAuthenticationStore(state => state.role);
  const [requests, setRequests] = useState([]);

  useEffect(() => {

    console.log(role);

    if (role === USER_AUTHORIZE) {
      userGetRequests().then(response => {
        console.log(response);
        setRequests(response.filter(r => r.status == 'BIDING'));

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
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Index;
