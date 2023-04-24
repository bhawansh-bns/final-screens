import React from 'react';

const UploadForm = ({ selectedFile, onFileChange, onFileUpload, loadApplications, companyName}) => {
  return (
    <div>
      <input onClick={onFileUpload} type="file" onChange={onFileChange} />
      <button  disabled={!selectedFile}>
        Upload!
      </button>
      {!selectedFile && <p>Upload your Application.pdf</p>}
    </div>
  );
};

export default UploadForm;


// onClick={ () => {onFileUpload(); loadApplications();}}