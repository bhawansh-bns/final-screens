import React, { useState } from 'react';
import UploadForm from './UploadForm';
import UploadedFile from './UploadedFile';
import TotalApplications from "./TotalApplications";
import ListApplications from "./ListApplications";
import axios from 'axios';

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [applications, setApplications] = useState([]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios.post('http://localhost:8443/sendApplication/Applicant1/Admin1/TesthariMtwat', formData).then((res) => {
    console.log(res.data);
    setUploadedFile(res.data);
    });
  };
  const checkingEndpoints = () => {
    axios.get('http://localhost:8443/getApplications/Applicant1').then((res) => {
    console.log(res.data);
    setApplications(res.data);
    }).catch(err => console.error(err));
  };
  return (
    <div>
      <TotalApplications total={applications.length} />
      <UploadForm
        selectedFile={selectedFile}
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
      />
      {/* <UploadedFile uploadedFile={uploadedFile} /> */}
      <button onClick={checkingEndpoints}>
        See All Applications
      </button>
      <h3>My Application List</h3>
      <ListApplications applications={applications} />
      
    </div>
  );
};

export default UploadFiles;
