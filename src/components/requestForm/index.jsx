

import React, { useEffect, useState } from 'react';
import { Divider, Flex, Form, Input, notification } from 'antd';
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "../../stores/authenticationStore";
import { creatorGetRequest, userGetRequest } from "../../services/requestService";
import { useParams } from "react-router-dom";
import { creatorGetRequestBidsOfRequest, userGetRequestBidsOfRequest } from "../../services/requestBidService";
import { RequestBidForm, RequestBidList } from "..";

const Index = () => {

  const { requestId } = useParams()
  const [form] = Form.useForm();

  const [request, setRequest] = useState({})
  const [requestBids, setRequestBids] = useState([])

  const account = useAuthenticationStore(state => state.account)

  function setRequestData(requestData) {
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
        .then(response => {
          setRequestData(response)

          return userGetRequestBidsOfRequest(requestId)
        })
        .then(response => {
          setRequestBids(response)
        })
        .catch(error => notifyError(error))

    } else
      if (isContainCreatorRole()) {
        creatorGetRequest(requestId)
          .then(response => {
            setRequestData(response)

            return creatorGetRequestBidsOfRequest(requestId)
          })
          .then(response => {
            setRequestBids(response)
          })
          .catch(error => notifyError(error))
      }

  }, [])

  return (
    <>
      <Flex gap="middle" align="center" vertical>
        <Form
          disabled={true}
          form={form}
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 16,
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

        <Divider />

        {(request.user && request.user.login !== account.login && isContainCreatorRole()) &&
          <RequestBidForm requestId={requestId} />
        }
      </Flex>

      <RequestBidList  request={request} account={account} requestBids={requestBids} />

    </>
  );
};

export default Index;
