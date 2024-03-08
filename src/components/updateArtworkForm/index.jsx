

import React, { useEffect } from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { Option } from 'antd/es/mentions';
import { useArtworkCategoryStore } from 'stores/artworkCategoryStore';
import { FirebaseUploadMedia, ThumbnailUploader } from 'components';
import { translateErrorToNotify } from 'utils/errorHandle';
import { useArtworkDetailStore } from 'stores/artworkDetailStore';
import { useUploadMediaStore } from 'stores/uploadMediaStore';

const Index = () => {

  const [form] = Form.useForm()

  const { artworkId } = useParams()

  const artwork = useArtworkDetailStore(state => state.artwork)

  const updateArtwork = useArtworkDetailStore(state => state.updateArtwork)
  const getThumbnailAsset = useArtworkDetailStore(state => state.getThumbnailAsset)
  const getAssets = useArtworkDetailStore(state => state.getAssets)
  const fetchArtwork = useArtworkDetailStore(state => state.fetchArtwork)

  const uploadMediaStore = useUploadMediaStore()
   


  const navigate = useNavigate()

  const artworkCategoryStore = useArtworkCategoryStore()

  useEffect(() => {
    artworkCategoryStore.fetchCategories()
    fetchArtwork(artworkId)
  }, [])

  useEffect(() => {
    if (artwork.id !== undefined) {
      form.setFieldsValue({
        'artworkCategory': artwork.category.id,
        'visibility': artwork.visibility,
        'artworkTitle': artwork.name,
        'artworkDescription': artwork.description,
        'artworkThumbnail': uploadMediaStore.thumbnail
      })

      uploadMediaStore.setThumbnailUrl(getThumbnailAsset(artwork).media.url)
      uploadMediaStore.setMediaUrls(getAssets(artwork).map(asset => asset.media.url))
      
    }
  }, [artwork])

  const onFinish = (values) => {
    console.log('Success:', values);

    updateArtwork(
      values.artworkCategory,
      values.artworkTitle,
      values.artworkDescription,
      values.visibility,
      uploadMediaStore.mapThumbnailToUrl(),
      uploadMediaStore.mapMediasToUrls(),
    ).then(response => {
      message.success(`Updated ${response.name} artwork!`)

      navigate('/mine/artworks')

    }).catch(error => translateErrorToNotify(error))
  };


  return (
    <>
      <Form
        form={form}
        name="artworkUpdateForm"
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
          <ThumbnailUploader />
        </Form.Item>

        <Form.Item
          label="Artwork attachments"
          name="artworkAttachments">
          <FirebaseUploadMedia />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={uploadMediaStore.loading}>
            Update artwork
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}


export default Index;
