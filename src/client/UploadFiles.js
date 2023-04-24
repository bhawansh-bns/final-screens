import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import UploadedFile from "./UploadedFile";
import axios from "axios";

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);  
  const [companyName, setInputValue] = useState("");


  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = (companyName) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(
        `http://localhost:8443/sendApplication/Applicant1/Admin1/${companyName}`,
        formData
      )
      .then((res) => {
        console.log(res.data);
        setUploadedFile(res.data);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={handlePopup}>Upload</button>
      {
        showPopup && (
          <>
            <input
              type="text"
              value={companyName}
              onChange={handleInputChange}
            />
            <UploadForm
              selectedFile={selectedFile}
              onFileChange={onFileChange}
              onFileUpload={onFileUpload(companyName)}
            />
          </>
        )
        /* <UploadedFile uploadedFile={uploadedFile} /> */
      }
    </div>
  );
};

export default UploadFiles;
