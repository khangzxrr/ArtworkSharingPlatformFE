

import { Avatar, Button, Card, Form, Input, List } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthenticationStore } from '../../stores/authenticationStore';
import { ENDED, FAILED } from 'models/RequestType';
import SockJsClient from 'react-stomp'
import { BASE_WEBSOCKET_URL } from 'utils/constants';
import { dateFormat } from 'utils/dateFormat';
import { useGetRequestChatHistories } from 'hooks/getChatHistoryHook';
import styles from './index.module.css'
const Index = (props) => {

  const [form] = Form.useForm()

  const accessToken = useAuthenticationStore(state => state.accessToken)

  const socketClientRef = useRef(undefined)

  const [messages, setMessages] = useState([])

  const previousMessages = useGetRequestChatHistories(props.requestId)

  useEffect(() => {
    setMessages(previousMessages)
  }, [previousMessages])



  const sendMessage = (message) => {
    socketClientRef.current.sendMessage(`/topic/requests/${props.requestId}/chats`, JSON.stringify({ message }))
  }

  const onReceivingMessage = (response) => {
    setMessages([...messages, response])
  }

  const onFinish = (values) => {

    form.resetFields()

    sendMessage(values.message)
  };





  return (
    <>
      <SockJsClient
        url={BASE_WEBSOCKET_URL + `?access_token=${accessToken}`}
        topics={[`/topic/requests/${props.requestId}/chats-notification`]}
        onMessage={(msg) => onReceivingMessage(msg)}
        ref={(client) => { socketClientRef.current = client }}
      />
      <Card>
        <List
          className={styles.chatBox}
          loading={false}
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg`} />}
                title={item.fromUser.login}
                description={item.message + " - " + dateFormat(item.createdDate)}
              >
              </List.Item.Meta>
              <div ref={el => {
                if (item.id == messages[messages.length - 1].id){
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' })
                }
              }}></div>

            </List.Item>

          )} />
        <Form
          disabled={props.request.status === ENDED || props.request.status === FAILED}
          layout='inline'
          autoComplete="off"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}>
            <Input.TextArea placeholder="Enter message here" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit'>Send message</Button>
          </Form.Item>
        </Form>
      </Card>
    </>

  );
};

export default Index;
