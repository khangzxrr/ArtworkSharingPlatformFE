

import React from 'react';
import { Badge, Card, List, Row } from 'antd';
import { useNavigate } from "react-router-dom";

import { Typography } from 'antd';

import styles from './index.module.css'
import { dateFormat } from 'utils/dateFormat';

const { Text } = Typography;

const Index = (props) => {

  const navigate = useNavigate()


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
          <Badge.Ribbon text={item.category.name}>
            <Card
              hoverable
              title={`${item.name} by ${item.owner.login}`}
              className={styles.request}
              onClick={() => navigate(`/requests/${item.id}`)}
              cover={
                <img 
                  alt={item.name}
                  className={styles.artworkImage}
                  src={item.artworkAssets.filter(as => as.thumbnail === true)[0].media.url}
                />
              }
            >
              <Row>
                {/* <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                  {item.user.login}
                </Avatar> */}
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
