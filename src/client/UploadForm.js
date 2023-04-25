import React from 'react';

const UploadForm = ({ selectedFile, onFileChange, onFileUpload, adminName, companyName}) => {
  return (
    <div>
      <input  type="file" onChange={onFileChange} />
      <button onClick={() => onFileUpload(adminName, companyName)} disabled={!selectedFile}>
        Upload!
      </button>
      {!selectedFile && <p>Upload your Application.pdf</p>}
    </div>
  );
};

export default UploadForm;


// onClick={ () => {onFileUpload(); loadApplications();}}