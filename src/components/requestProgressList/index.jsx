

import React, { } from 'react';
import { Badge, Button, Card, Row, Space, Steps, notification } from 'antd';
import { Link } from 'react-router-dom';
import { isContainUserRole } from 'stores/authenticationStore';
import { userAcceptRequestProgress, userRejectRequestProgress } from 'services/requestProgressService';


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
          if (rp.type === 'FIRST_PAYMENT') {
            return <Badge.Ribbon text={rp.status} color={mapStatusToColor(rp.status)}>
              <Card title="First payment" size="small">
                paid at: {rp.date}
              </Card>
            </Badge.Ribbon>
          }
          else if (rp.type === 'SECOND_PAYMENT') {
            return <Badge.Ribbon text={rp.status} color={mapStatusToColor(rp.status)}>
              <Card title="Second payment" size="small">
                paid at: {rp.date}
              </Card>
            </Badge.Ribbon>
          }
          else if (rp.type.includes('REPORT')) {

            return <Badge.Ribbon text={rp.status} color={mapStatusToColor(rp.status)}>
              <Card
                title={rp.type}
                size="small"
              >
                <p>created at: {rp.date}</p>
                <p>description: {rp.description} </p>
                <Space direction='vertical'>
                  {
                    rp.attachments.map(attach => <Link to={attach.media.url}>{attach.media.url}</Link>)
                  }
                  {mapReportActions(rp)}
                </Space>

                

              </Card>
            </Badge.Ribbon>
          }
        })

      }
    </>
  );
};

export default Index;
