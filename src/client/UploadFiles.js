import React, { useState } from 'react';
import UploadForm from './UploadForm';
import UploadedFile from './UploadedFile';
import axios from 'axios';

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('myFile', selectedFile, selectedFile.name);
    axios.post('api/uploadfile', formData).then((res) => {
      setUploadedFile(res.data);
    });
  };

  return (
    <div>
      <UploadForm
        selectedFile={selectedFile}
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
      />
      <UploadedFile uploadedFile={uploadedFile} />
    </div>
  );
};

export default UploadFiles;
