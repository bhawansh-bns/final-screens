import React, { useState, useEffect } from "react";
import AdminPopup from "./AdminPopup";
import Table from "../components/table/Table";
import Search from "../components/search/Search";
import axios from "axios";
import {
  getAssignmentsForAdmin_response,
  getReviewers_response,
} from "../temp-variables/tempResponses";

function SearchPopupAdmin({ accountName, companyName }) {
  const [companyData, setCompanyData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  let [list, setList] = useState([]);
  const [reviewerName, setReviewer] = useState("");

  //  {{ }}

  const handleNameChange = (value) => {
    setReviewer(value);
  };

  const getAssignments = () => {
    axios
      .get(
        `https://localhost:8446/getAssignments/${accountName}/${companyName}`
      )
      .then((res) => {
        setCompanyData(res.data);
        console.log(res.data);
        console.log(companyData);
      });
  };

  useEffect(() => {
    getReviewers();

  }, [companyName]);

  const getReviewers = () => {
    axios.get(`https://localhost:8446/getReviewers`).then((res) => {
      setList(res.data);
      console.log(res.data);
      getAssignments();
    });
    // setList(getReviewers_response);
   
  };

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          {/* <h1>{companyName}</h1> */}
          <Search onNameChange={handleNameChange} list={list} />
          <AdminPopup
            companyData={companyData}
            companyName={companyName}
            reviewerName={reviewerName}
            account={accountName}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPopupAdmin;
