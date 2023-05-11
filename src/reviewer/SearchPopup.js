import React, { useState, useEffect } from "react";
import Table from "../components/table/Table";
import ReviewerPopup from "./ReviewerPopup";
import { getAssignmentsForCompanyName_response } from "../temp-variables/tempResponses";

function SearchPopup(props) {
  const [companyData, setCompanyData] = useState([]);
  const { accountName, companyName } = props;

  const handleInputChange = (event) => {
    setcompanyName(event.target.value);
  };

  const fetchData = async () => {
    // const response = await fetch(
    //   `https://localhost:8449/getAssignments/${accountName}/${companyName}`
    // );
    // const data = await response.json();
    setCompanyData(getAssignmentsForCompanyName_response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

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
