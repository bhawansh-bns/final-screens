import React, { useState, useEffect } from "react";
import Table from "../components/table/Table";
import ReviewerPopup from "./ReviewerPopup";
import { getAssignmentsForCompanyName_response } from "../temp-variables/tempResponses";
import axios from "axios";

function SearchPopup({ accountName, companyName }) {
  const [companyData, setCompanyData] = useState([]);

  const getAssignments = async () => {
    axios.get(`https://localhost:8449/getAssignments/${accountName}/${companyName}`).then((res) => {
      console.log(res.data);
      setCompanyData(res.data);
    })
    // setCompanyData(getAssignmentsForCompanyName_response);
  };
  useEffect(() => {
    getAssignments();
  }, [companyName]);


  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <ReviewerPopup
            companyName={companyName}
            companyData={companyData}
            accountName={accountName}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;
