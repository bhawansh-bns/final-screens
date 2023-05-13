import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function CollateFeedbackLicenseGrant({ companyName, account }) {
  const [adminFeedback, setAdminFeedback] = useState("");
  const [enable, setEnable] = useState(false);

  const handleAdminFeedbackInputChange = (event) => {
    setAdminFeedback(event.target.value);
  };

  const handleCollateFeedback = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://localhost:8446/collateFeedback/${companyName}/${account}`,
        adminFeedback
      )
      .then((response) => {
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setEnable(true);
  };

  const handleLicenseGrant = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://localhost:8446/licenceGrant/${companyName}/${account}/2024-09-04T10:44:46.000`
      )
      .then((response) => {
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        class="form-control my-4"
        style={{ width: 300 }}
        type="text"
        value={adminFeedback}
        onChange={handleAdminFeedbackInputChange}
        placeholder="Enter Admin Feedback..."
      />

      <button class="btn btn-primary me-2" onClick={handleCollateFeedback}>
        Collate Feedback
      </button>
      <button class="btn btn-success ms-2" onClick={handleLicenseGrant}>
        License Grant
      </button>
    </div>
  );
}

export default CollateFeedbackLicenseGrant;
