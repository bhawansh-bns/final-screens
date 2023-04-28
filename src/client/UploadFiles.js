import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import UploadedFile from "./UploadedFile";
import Search from "../components/search/Search";
import axios from "axios";

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  let [list, setList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdmin] = useState("");

  const handleNameChange = (value) => {
    setAdmin(value);
  };

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = (adminName, companyName) => {
    let formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(
        `https://localhost:8443/sendApplication/Applicant1/${adminName}/${companyName}`,
        formData
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const getAdmins = () => {
    axios.get(`https://localhost:8443/getAdmins`).then((res) => {
      setList(res.data);
      console.log(list);
      setShowPopup(!showPopup);
    });
  };

  const handleCompanyInputChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleAdminInputChange = (event) => {
    setAdmin(event.target.value);
  };

  const handlePopup = () => {
    getAdmins();
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
            {/* <input
              type="text"
              value={adminName}
              onChange={handleAdminInputChange}
              placeholder="Choose your Admin..."
            /> */}

            <Search onNameChange={handleNameChange} list={list} />

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