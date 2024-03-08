

import React, {  } from 'react';
import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { beforeUploadMustBeImageFile, customUpload } from 'utils/upload';
import { useUploadMediaStore } from 'stores/uploadMediaStore';

const Index = () => {


  const uploadMediaStore = useUploadMediaStore()


  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };



  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      uploadMediaStore.setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        console.log(info.file)

        uploadMediaStore.setThumbnailUrl(info.file.response)
      });
    }
  }


  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {uploadMediaStore.loading ? <LoadingOutlined /> : <PlusOutlined />}
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
        {uploadMediaStore.thumbnail.length > 0 ? (
          <img
            src={uploadMediaStore.thumbnail[0].url}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  )
}


export default Index;
