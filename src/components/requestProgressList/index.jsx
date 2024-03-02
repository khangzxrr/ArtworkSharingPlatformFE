

import React, { } from 'react';
import { Badge, Button, Card, Row, Space, Steps, Typography, notification } from 'antd';
import { Link } from 'react-router-dom';
import { isContainUserRole } from 'stores/authenticationStore';
import { userAcceptRequestProgress, userRejectRequestProgress } from 'services/requestProgressService';
import { dateFormat } from 'utils/dateFormat';
import styles from './index.module.css'
import { FIRST_PAYMENT, REPORT, SECOND_PAYMENT } from 'models/RequestProgressTypes';

const Index = (props) => {



  const mapStatusToColor = (status) => {
    if (status === 'PENDING') return 'orange'
    if (status === 'SUCCEED') return 'green'

    return 'red'
  }


  const acceptRequestProgress = (requestProgressId) => {
    userAcceptRequestProgress(props.requestId, requestProgressId)
      .then(response => notification.info({ message: 'Update request progress', description: 'Accepted request progress report!' }))
      .catch(error => {
        console.log(error)
        notification.error({ message: 'Update request progress', description: 'Fail to accept request progress report!' })
      })
      .finally(() => {
        props.refreshPage()
      })
  }

  const rejectRequestProgress = (requestProgressId) => {
    userRejectRequestProgress(props.requestId, requestProgressId)
      .then(response => notification.info({ message: 'Update request progress', description: 'Accepted request progress report!' }))
      .catch(error => {
        console.log(error)
        notification.error({ message: 'Update request progress', description: 'Fail to accept request progress report!' })
      })
      .finally(() => {
        props.refreshPage()
      })
  }

  const mapReportActions = (requestProgress) => {

    if (requestProgress.status === 'PENDING' && isContainUserRole()) {
      return <Space direction='horizontal'>
        <Button type='primary' onClick={() => acceptRequestProgress(requestProgress.id)}>Accept</Button>
        <Button danger type='primary' onClick={() => rejectRequestProgress(requestProgress.id)}>Reject</Button>
      </Space>
    }
  }

  return (
    <>
      {
        props.requestProgresses.map(rp => {
          if (rp.type === FIRST_PAYMENT) {
            return <Badge.Ribbon text={rp.status} color={mapStatusToColor(rp.status)} >
              <Card title="First payment" size="small" className={styles.requestProgress}>
                <Row>
                  <Typography.Text>Paid at: <Typography.Text strong>{dateFormat(rp.createdDate)}</Typography.Text></Typography.Text>

                </Row>
                <Row>
                  <Typography.Text>With price: <Typography.Text strong>{rp.transaction.amount}$</Typography.Text></Typography.Text>
                </Row>

              </Card>
            </Badge.Ribbon>
          }
          else if (rp.type === SECOND_PAYMENT) {
            return <Badge.Ribbon text={rp.status} color={mapStatusToColor(rp.status)}>
              <Card title="Second payment" size="small" className={styles.requestProgress}>
                <Row>
                  <Typography.Text>Paid at: <Typography.Text strong>{dateFormat(rp.createdDate)}</Typography.Text></Typography.Text>

                </Row>
                <Row>
                  <Typography.Text>With price: <Typography.Text strong>{rp.transaction.amount}$</Typography.Text></Typography.Text>
                </Row>
              </Card>
            </Badge.Ribbon>
          }
          else if (rp.type === REPORT) {

            return <Card
              title={rp.type}
              className={styles.requestProgress}
              size="small"
            >
               <Row>
                  <Typography.Text>Created at: <Typography.Text strong>{dateFormat(rp.createdDate)}</Typography.Text></Typography.Text>

                </Row>
                <Row>
                  <Typography.Text>Description: <Typography.Text strong>{rp.description}</Typography.Text></Typography.Text>
                </Row>
              <Space direction='vertical'>
                {
                  rp.attachments.map((attach, index) => <Link target="_blank" to={attach.media.url}>attachment - {index+1}</Link>)
                }
                {mapReportActions(rp)}
              </Space>



            </Card>
          }
        })

      }
    </>
  );
};

export default Index;
