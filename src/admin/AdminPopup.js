import React, { useState } from "react";
import Table from '../components/table/Table';
import axios from "axios";
import CollateFeedbackLicenseGrant from './CollateFeedbackLicenseGrant';


const AdminPopup = ({ companyData, companyName }) => {
  const [reviewerName, setReviewerName] = useState("");
  const [licenseExpiryDate, setLicenseExpiryDate] = useState(new Date().toISOString().substr(0, 19));
  const [assignmentDone, setAssignmentDone] = useState(false);

  const handleReviewerInputChange = (event) => {
    setReviewerName(event.target.value);
  };

  const handleDateInputChange = (event) => {
    setLicenseExpiryDate(event.target.value);
  };


  const handleAssignApplication = (event) => {
    event.preventDefault();
    const formattedDate = licenseExpiryDate + "T00:00:00.000";
    axios
      .post(
        `http://localhost:8446/assignApplication/Admin1/Applicant1/${companyName}/${reviewerName}/${formattedDate}`
      )
      .then((response) => {
        setAssignmentDone(true);
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Table data={companyData} />
      <input
        type="text"
        value={reviewerName}
        onChange={handleReviewerInputChange}
        placeholder="Enter Reviewer Name to assign the application to..."
      />
      <input
        type="date"
        value={licenseExpiryDate}
        onChange={handleDateInputChange}
        placeholder="Enter Reviewer Name to assign the application to..."
      />
      <button onClick={handleAssignApplication}> Add Reviewer! </button>
      {assignmentDone && (

        <CollateFeedbackLicenseGrant companyName={companyName} />

      )}
    </div>
  );
};

export default AdminPopup;
