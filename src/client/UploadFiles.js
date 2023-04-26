import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";
import UploadedFile from "./UploadedFile";
import Search from "../components/search/Search";
import axios from "axios";
import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [list, setList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdmin] = useState("");

  const queryClient = new QueryClient();

  const handleAdminChange = (value) => {
    setAdmin(value);
  };

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
        setList(res.data);
      });
  };

  const getAdmins = () => {
    axios
      .get(
        `http://localhost:8443/getAdmins`
      )
      .then((res) => {
        console.log(res.data);
        list = res.data;
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

            <QueryClientProvider client={queryClient}>
              <Search onAdminChange={handleAdminChange} list={list} />
            </QueryClientProvider>

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
