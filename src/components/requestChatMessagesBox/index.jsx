

import { Avatar, Form, List } from 'antd';
import React, { useRef, useState } from 'react';
import ReactPolling from 'react-polling/lib/ReactPolling';
import { UserGetAllMessage, CreatorGetAllMessage } from 'services/requestChatService';
import { isContainUserRole } from 'stores/authenticationStore';
import { BASE_URL } from 'utils/constants';
import { dateFormat } from 'utils/dateFormat';
import styles from './index.module.css'

const Index = (props) => {

  const messageEl = useRef(null);


  const [messages, setMessages] = useState([])

  const [form] = Form.useForm()


  const pollingUrl = () => {
    if (isContainUserRole()) {
      return BASE_URL + `/audience/requests/${props.requestId}/chats`
    }

    return BASE_URL + `/creator/requests/${props.requestId}/chats`
  }

  const pollingPromise = () => {
    if (isContainUserRole()) {
      return UserGetAllMessage(props.requestId, 0)
    }

    return CreatorGetAllMessage(props.requestId, 0)
  }


  const onReceivingMessages = (response) => {

    if (response.length == 0) return true

    if (messages.length == 0) {
      setMessages(response)

      return true
    }

    const latestMessage = messages[messages.length - 1]

    const latestMessageOfResponse = response[0]

    console.log(latestMessage, latestMessageOfResponse)

    if (latestMessageOfResponse.id > latestMessage.id) {
      setMessages([
        ...messages,
        latestMessageOfResponse
      ])
    }

    return true
  }

  return (
    <>
      <ReactPolling
        url={pollingUrl()}
        promise={pollingPromise}

        interval={1000}
        retryCount={3}
        method={"GET"}
        onSuccess={(response) => onReceivingMessages(response.data)}
        onFailure={(error) => console.log(error)}
        render={({ startPolling, stopPolling, isPolling }) => {
          if (isPolling) {

          } else {
            return (
              <div>Something wrong has occur, please refresh page to keep polling message</div>
            );
          }
        }}

      />
      <List
        className={styles.chatMessageList}
        loading={false}
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg`} />}
              title={item.fromUser.login}
              description={item.message + " - " + dateFormat(item.createdDate)}
            >

            </List.Item.Meta>


          </List.Item>

        )} />
    </>

  );
};

export default Index;
