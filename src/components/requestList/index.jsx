

import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Button, Card, Col, List, Row, Space, notification } from 'antd';
import { isContainCreatorRole, isContainUserRole } from "../../stores/authenticationStore";
import { creatorGetRequests, userGetRequests } from "../../services/requestService";
import { Link, useNavigate } from "react-router-dom";

import { Typography } from 'antd';

import styles from './index.module.css'
import { dateFormat } from 'utils/dateFormat';

const { Text } = Typography;

const Index = () => {

  const [request, setRequest] = useState({
    totalCount: 0,
    list: []
  });

  const navigate = useNavigate()

  const mapStatusToColor = (status) => {
    if (status === 'ENDED') return 'pink'
    if (status === 'ON_BIDING') return 'green'
    if (status === 'ON_GOING') return 'orange'
    if (status === 'FAILED') return 'red'
  }
  useEffect(() => {
    if (isContainUserRole()) {
      userGetRequests().then(response => {
        setRequest(response);

      }).catch(error => {
        console.log(error);
        notification.error({ message: 'error getting requests', description: 'Please re-login and try again' });
      });

    } else
      if (isContainCreatorRole()) {
        creatorGetRequests().then(response => {
          setRequest(response);

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
          total: request.totalCount,
          defaultCurrent: 1,
          position: 'bottom',
          align: 'center',
        }}
        dataSource={request.list}
        rowKey={(item) => item.id}
        renderItem={(item, index) => (
          <Badge.Ribbon text={item.status} color={mapStatusToColor(item.status)}>
            <Card hoverable title={item.title} className={styles.request} onClick={() => navigate(`/requests/${item.id}`)}>
              <Row>
                <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                  {item.user.login}
                </Avatar>
                  <Text className={styles.description}>
                    "{item.description}" - {dateFormat(item.createdDate)}
                  </Text>

              </Row>
            </Card>
          </Badge.Ribbon>

        )}
      />
    </>
  );
};

export default Index;
