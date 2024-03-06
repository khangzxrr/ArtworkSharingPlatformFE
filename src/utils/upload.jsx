
import { storage } from 'firebase_init';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { message, notification } from 'antd';

export const customUpload = ({ onError, onSuccess, file, onProgress }) => {

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

export const beforeUploadMustBeImageFile = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  return isJpgOrPng;
};