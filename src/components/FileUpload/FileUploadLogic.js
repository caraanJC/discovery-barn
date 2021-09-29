import { useState } from 'react';
import axios from 'axios';

export const FileUploadLogic = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  //   const [message, setMessage] = useState('');

  const handleInputchange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      alert('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        alert('There was a problem with the server');
      } else {
        alert(err.response.data.msg);
      }
    }
  };

  return { file, filename, uploadedFile, handleInputchange, handleSubmit };
};
