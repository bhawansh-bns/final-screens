import React, { useState } from "react";
import Table from "../components/table/Table";
import axios from "axios";
import CollateFeedbackLicenseGrant from "./CollateFeedbackLicenseGrant";
import Search from "../components/search/Search";

const AdminPopup = ({ companyData, companyName, reviewerName, account }) => {
  // const [reviewerName, setReviewerName] = useState("");
  const [licenseExpiryDate, setLicenseExpiryDate] = useState(
    new Date().toISOString().substr(0, 19)
  );
  const [assignmentDone, setAssignmentDone] = useState(false);

  // const handleReviewerInputChange = (event) => {
  //   setReviewerName(event.target.value);
  // };

  const handleDateInputChange = (event) => {
    setLicenseExpiryDate(event.target.value);
  };

  const handleAssignApplication = (event) => {
    // event.preventDefault();
    // const formattedDate = licenseExpiryDate + "T00:00:00.000";
    // axios
    //   .post(
    //     `https://localhost:8446/assignApplication/${account}/${companyName}/${reviewerName}/${formattedDate}`
    //   )
    //   .then((response) => {
    //     alert(JSON.stringify(response.data));
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      {/* <input
        type="text"
        value={reviewerName}
        onChange={handleReviewerInputChange}
        placeholder="Enter Reviewer Name to assign the application to..."
      /> */}
      <div class="form-group my-3">
        <input
          type="date"
          class="form-control col-6"
          style={{ width: "280px" }}
          value={licenseExpiryDate}
          onChange={handleDateInputChange}
          placeholder="Enter Reviewer Name to assign the application to..."
        />
      </div>

      <button class="btn btn-primary" onClick={handleAssignApplication}>
        Add Reviewer
      </button>
      <Table data={companyData} />

      <CollateFeedbackLicenseGrant
        companyName={companyName}
        account={account}
      />
    </div>
  );
};

export default AdminPopup;
