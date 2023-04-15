import React from 'react';

const UploadedFile = ({ uploadedFile }) => {
  return (
    uploadedFile && (
      <div>
        <h2>File Details:</h2>
        <p>File Name: {uploadedFile.name}</p>
        <p>File Type: {uploadedFile.type}</p>
        <p>Last Modified: {new Date(uploadedFile.lastModified).toDateString()}</p>
      </div>
    )
  );
};

export default UploadedFile;
