import { useState } from 'react';
// import axios from 'axios';
import { storage } from '../../base';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const FileUploadLogic = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState('Choose File');
  const [fileURL, setFileURL] = useState();
  // const [uploadedFile, setUploadedFile] = useState({});
  //   const [message, setMessage] = useState('');

  const imagesRef = ref(storage, filename);

  const handleInputchange = (e) => {
    setFile(e.target.files[0]);
    setFilename('jc/images/' + e.target.files[0].name);
  };

  const getImageURL = () => {
    getDownloadURL(ref(storage, filename))
      .then((url) => {
        setFileURL(url);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await uploadBytes(imagesRef, file).then((snapshot) => {
      console.log('Uploaded a file');
    });

    getImageURL();
  };

  return { file, fileURL, handleInputchange, handleSubmit };
};
