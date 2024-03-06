

import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Upload, message, notification } from 'antd';
import { userCreateRequest } from "../../services/requestService";
import { useNavigate } from "react-router-dom";
import { Option } from 'antd/es/mentions';
import { useArtworkCategoryStore } from 'stores/artworkCategoryStore';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { beforeUploadMustBeImageFile, customUpload } from 'utils/upload';
import { FirebaseUploadMedia } from 'components';
import { creatorCreateArtwork } from 'services/artworkService';
import { translateErrorToNotify } from 'utils/errorHandle';

const Index = () => {

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [attachments, setAttachment] = useState([])

  const navigate = useNavigate()

  const artworkCategoryStore = useArtworkCategoryStore()

  useEffect(() => {
    artworkCategoryStore.fetchCategories()
  }, [])

  const makeSureAllUploadMediaFinished = () => {
    return attachments.find(u => u.status === 'uploading') !== undefined
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    
    creatorCreateArtwork(values.artworkCategory, values.artworkTitle, values.artworkDescription, values.visibility, values.artworkThumbnail.file.response, attachments.map(a => a.response))
    .then(response => {
      message.success(`Created ${response.name} artwork!`)

      navigate('/mine/artworks')
    })
    .catch(error => translateErrorToNotify(error))
  };


  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <>
      <Form
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
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="artworkCategory"
          label="Artwork category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a category"
            allowClear
          >
            {artworkCategoryStore.categories.map(category =>
              <Option value={category.id}>{category.name}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item
          name="visibility"
          label="Artwork visibility"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a category"
            allowClear
          >
            <Option value={'PRIVATE'}>Private</Option>
            <Option value={'PUBLIC'}>Public</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Artwork title"
          name="artworkTitle"
          rules={[
            {
              required: true,
              message: 'Please input artwork title!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Artwork description"
          name="artworkDescription"
          rules={[
            {
              required: true,
              message: 'Please input artwork description!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Artwork thumbnail"
          name="artworkThumbnail"
          rules={[
            {
              required: true,
              message: 'Please input artwork thumbnail!',
            },
          ]}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            // @ts-ignore
            customRequest={customUpload}
            beforeUpload={beforeUploadMustBeImageFile}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: '100%',
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          label="Artwork attachments"
          name="artworkAttachments">
          <FirebaseUploadMedia setAttachmentUrls={setAttachment} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={loading || makeSureAllUploadMediaFinished()}>
            Create a new artwork
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}


export default Index;
