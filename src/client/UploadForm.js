import React from "react";

const UploadForm = ({
  selectedFile,
  onFileChange,
  onFileUpload,
  adminName,
  companyName,
}) => {
  return (
    <div class="my-4">
      <input
        class="form-control my-2"
        type="file"
        onChange={onFileChange}
        style={{ width: "18rem" }}
      />
      <p>Please upload the relevant forms</p>
      <button
        class="btn btn-primary my-2"
        onClick={() => onFileUpload(adminName, companyName)}
        disabled={!selectedFile}
      >
        Upload!
      </button>
    </div>
  );
};

export default UploadForm;

// onClick={ () => {onFileUpload(); loadApplications();}}
