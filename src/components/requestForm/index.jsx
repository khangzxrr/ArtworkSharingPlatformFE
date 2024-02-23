

import styles from "./index.module.css";
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "../../stores/authenticationStore";
import { CREATOR_AUTHORIZE, USER_AUTHORIZE } from "../../utils/constants";
import { creatorGetRequest, userCreateRequest, userGetRequest, userGetRequests } from "../../services/requestService";
import { Link, useParams } from "react-router-dom";

const Index = () => {

  const { requestId } = useParams()
  const [form] = Form.useForm();

  const [request, setRequest] = useState({})
  
  const account = useAuthenticationStore(state => state.account)

  function setRequestData(requestData){
    form.setFieldsValue({
      requestTitle: requestData.title,
      requestDescription: requestData.description
    })

    setRequest(requestData)
  }

  function notifyError(err) {
    console.log(err)
    notification.error({ message: 'Get request', description: 'Failed to get request, please try again' })
  }

  useEffect(() => {

    if (isContainUserRole()) {
      userGetRequest(requestId)
        .then(response => setRequestData(response))
        .catch(error => notifyError(error))

    } else
      if (isContainCreatorRole()) {
        creatorGetRequest(requestId)
          .then(response => {
            setRequestData(response)

            return 
          })
          .catch(error => notifyError(error))
      }

  }, [])

  return (
    <>
      <Form
        disabled='true'
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Request title"
          name="requestTitle"
          fi
          rules={[
            {
              required: true,
              message: 'Please input request title!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Request description"
          name="requestDescription"
          rules={[
            {
              required: true,
              message: 'Please input request description!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

      </Form>

      {(request.user && request.user.login !== account.login && isContainCreatorRole()) &&
        <div>Hello creator</div>
      }
    </>
  );
};

export default Index;
