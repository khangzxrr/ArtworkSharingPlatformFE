

import React, { useState } from 'react';
import { Badge, Button, Card, Col, Divider, Form, List, Row, Space, notification } from 'antd';
import { Link, useNavigate } from "react-router-dom";

import { Typography } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import styles from './index.module.css'
import { dateFormat } from 'utils/dateFormat';
import { Comment } from '@ant-design/compatible';
import { useArtworkDetailStore } from 'stores/artworkDetailStore';
import TextArea from 'antd/es/input/TextArea';
import { isContainCreatorRole, isContainUserRole } from 'stores/authenticationStore';
import { AudienceCreateArtworkComment, creatorCreateArtworkComment } from 'services/artworkCommentService';
import { translateErrorToNotify } from 'utils/errorHandle';
import { useArtworkCommentStore } from 'stores/artworkCommentStore';

const { Text } = Typography;

const Index = () => {

  const navigate = useNavigate()

  const [form] = Form.useForm()
  const artwork = useArtworkDetailStore(state => state.artwork)

  const comments = useArtworkCommentStore(state => state.comments)
  const commentTotalCount = useArtworkCommentStore(state => state.totalCount)
  const fetchArtworkComments = useArtworkCommentStore(state => state.fetchArtworkComments)

  const [postCommentLoading, setPostCommentLoading] = useState(false)

  const onCommentFinished = (values) => {

    setPostCommentLoading(true)

    let promise
    if (isContainUserRole()) {
      promise = AudienceCreateArtworkComment(artwork.id, values.content)
    }
    else
      if (isContainCreatorRole()) {
        promise = creatorCreateArtworkComment(artwork.id, values.content)
      }

    promise.then(response => {
      form.resetFields()
      notification.success({ message: 'Comment', description: 'Create comment successfully!' })
    })
      .catch(error => translateErrorToNotify(error))
      .finally(() => {
        setPostCommentLoading(false)
      })

  }

  const loadMoreComments = () => {
    fetchArtworkComments(artwork.id).then(() => {
      console.log(comments.length, commentTotalCount)
    })
  }

  return (
    <Row>
      <Col span={8}>
        <h1>Artwork</h1>
        <Badge.Ribbon text={artwork.category.name} className={styles.artwork}>
          <Card
            title={`${artwork.name} by [${artwork.owner.login}]`}
            className={styles.artwork}
            cover={
              artwork.artworkAssets.length > 0 &&
              <img
                alt={artwork.name}
                className={styles.artworkImage}
                src={artwork.artworkAssets.filter(as => as.thumbnail === true)[0].media.url}
              />
            }
          >
            <Text className={styles.description}>
              "{artwork.description}" - {dateFormat(artwork.createdDate)}
            </Text>

            <Divider />
            <List
              dataSource={artwork.artworkAssets}
              renderItem={(item, index) => item.thumbnail ? null : (
                <List.Item>
                  <Link to={item.media.url} target="_blank">{`attachment ${index}`}</Link>
                </List.Item>
              )}
            />
          </Card>
        </Badge.Ribbon>
      </Col>
      <Col span={8}>
        <h1>Comments</h1>
        <Form disabled={postCommentLoading} onFinish={onCommentFinished} form={form} className={styles.commentForm}>
          <Form.Item
            name={'content'}
            label={'content'}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </Form>
        {
          comments.map(cmt =>
            <Comment
              author={cmt.owner.login}
              avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              content={(<p>{cmt.content} - {dateFormat(cmt.createdDate)}</p>)}

            />)
        }
        {/* <Button onClick={() => loadMoreComments()} disabled={commentTotalCount == comments.length}>Load more comments</Button> */}


      </Col>
    </Row>
  );
};

export default Index;
