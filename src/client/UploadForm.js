import React from 'react';

const UploadForm = ({ selectedFile, onFileChange, onFileUpload }) => {
  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload} disabled={!selectedFile}>
        Upload!
      </button>
      {!selectedFile && <p>Upload your Application.pdf</p>}
    </div>
  );
};

export default UploadForm;
