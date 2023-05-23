import React, { useState, useEffect } from "react";
import AdminPopup from "./AdminPopup";
import Table from "../components/table/Table";
import Search from "../components/search/Search";
import axios from "axios";
import {
  getAssignmentsForAdmin_response,
  getReviewers_response,
} from "../temp-variables/tempResponses";

function SearchPopupAdmin({ accountName, companyName, stage }) {
  const [companyData, setCompanyData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  let [list, setList] = useState([]);
  const [reviewerName, setReviewer] = useState("");

  //  {{ }}

  const handleNameChange = (value) => {
    setReviewer(value);
  };

  const handleInputChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleSearch = () => {
    // axios
    //   .get(
    //     `https://localhost:8446/getAssignments/${accountName}/${companyName}`
    //   )
    //   .then((res) => {
    //     setCompanyData(res.data);
    //     console.log(res.data);
    //   });
    setCompanyData(getAssignmentsForAdmin_response);
    getReviewers();
  };
  useEffect(() => {
    handleSearch();
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  const downloadApplication = () => {
    console.log(companyName);
    console.log(accountName);
    // event.preventDefault();
    // axios
    //   .post(
    //     `https://localhost:8443/deleteApplication/Test/Applicant1`
    //   )
    //   .then((response) => {
    //     alert(JSON.stringify(response.data));
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const getReviewers = () => {
    // axios.get(`https://localhost:8446/getReviewers`).then((res) => {
    //   setList(res.data);
    //   console.log(list);
    // });
    setList(getReviewers_response);
    setShowPopup(true);
  };

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <button class="btn btn-primary my-3" onClick={downloadApplication}>
            Download Application
          </button>
          <Search onNameChange={handleNameChange} list={list} />
          <AdminPopup
            companyData={companyData}
            companyName={companyName}
            reviewerName={reviewerName}
            account={accountName}
            stage={stage}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPopupAdmin;
