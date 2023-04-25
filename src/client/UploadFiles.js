import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import UploadedFile from "./UploadedFile";
import axios from "axios";

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);  
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdmin] = useState("");


  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = (adminName, companyName) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(
        `http://localhost:8443/sendApplication/Applicant1/${adminName}/${companyName}`,
        formData
      )
      .then((res) => {
        console.log(res.data);
        setUploadedFile(res.data);
      });
  };

  const handleCompanyInputChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleAdminInputChange = (event) => {
    setAdmin(event.target.value);
  };


  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={handlePopup}>New Application!</button>
      {
        showPopup && (
          <>
            <input
              type="text"
              value={companyName}
              onChange={handleCompanyInputChange}
              placeholder="Enter your Company Name..."
            />
            <input
              type="text"
              value={adminName}
              onChange={handleAdminInputChange}
              placeholder="Choose your Admin..."
            />
            <UploadForm
              selectedFile={selectedFile}
              onFileChange={onFileChange}
              onFileUpload={() => onFileUpload(adminName, companyName)}
              adminName={adminName}
              companyName={companyName}
            />
          </>
        )
        /* <UploadedFile uploadedFile={uploadedFile} /> */
      }
    </div>
  );
};

export default UploadFiles;
