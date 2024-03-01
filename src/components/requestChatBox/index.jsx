

import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import { isContainCreatorRole, isContainUserRole } from '../../stores/authenticationStore';
import { CreatorCreateChatMessage, UserCreateChatMessage } from 'services/requestChatService';
import { translateErrorToNotify } from 'utils/errorHandle';
import { RequestChatMessageBox } from 'components';
import { ENDED, FAILED } from 'models/RequestType';
const Index = (props) => {

  const [form] = Form.useForm()


  const sendMessage = (message) => {
    if (isContainUserRole()) {
      UserCreateChatMessage(props.requestId, message)
        .then(response => { })
        .catch(error => translateErrorToNotify(error))
    }
    else if (isContainCreatorRole()) {
      CreatorCreateChatMessage(props.requestId, message)
        .then(response => { })
        .catch(error => translateErrorToNotify(error))
    }
  }

  const onFinish = (values) => {

    form.resetFields()

    sendMessage(values.message)
  };



  return (
    <>

      <Card>
        <RequestChatMessageBox requestId={props.requestId} />
        <Form
          disabled={props.request.status === ENDED || props.request.status === FAILED }
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
