// @ts-nocheck


import React, { useState } from 'react';
import { Modal, Upload, notification } from 'antd';
import { storage } from 'firebase_init';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

import { PlusOutlined } from '@ant-design/icons';

const Index = (props) => {

  const [imageUrls, setImageUrls] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const beforeUpload = (file) => {
    //console.log('beforeUpload', file)
  }

  const handleChange = ({ fileList: newFileList }) => {
    console.log('handle change', newFileList)
    setImageUrls(newFileList)

    props.setAttachmentUrls(newFileList)

  }

  const customUpload = ({ onError, onSuccess, file, onProgress }) => {

    const storageRef = ref(storage, `${file.name}`)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
      console.log(snapshot.bytesTransferred)
      onProgress({ percent: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 })
    },
      (error) => {
        console.log(error)
        notification.error({ message: 'upload', description: 'something wrong with upload, please try again!' })
        onError(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(s => {
          onSuccess(s)
        })
      })

  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };


  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        fileList={imageUrls}
        showUploadList={true}
        customRequest={customUpload}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>

  );
};

export default Index;
