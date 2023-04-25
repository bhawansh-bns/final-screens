import React , {useState} from "react";
import axios from "axios";

function CollateFeedbackLicenseGrant({ companyName }) {
  const [adminFeedback, setAdminFeedback] = useState("");
 
 
  const handleAdminFeedbackInputChange = (event) => {
    setAdminFeedback(event.target.value);
  };


  const handleCollateFeedback = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8446/collateFeedback/${companyName}/Admin1`,
        adminFeedback
      )
      .then((response) => {
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLicenseGrant = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8446/licenceGrant/${companyName}/Admin1/2024-09-04T10:44:46.000`
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
        type="text"
        value={adminFeedback}
        onChange={handleAdminFeedbackInputChange}
        placeholder="Enter Admin Feedback..."
      />
      <button onClick={handleCollateFeedback}> Collate Feedback </button>
      <button onClick={handleLicenseGrant}> License Grant </button>
    </div>
  );
}

export default CollateFeedbackLicenseGrant;
