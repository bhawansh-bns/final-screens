import React, { useState, useEffect } from "react";
import AdminPopup from "./AdminPopup";
import Table from "../components/table/Table";
import Search from "../components/search/Search";
import axios from "axios";

function SearchPopupAdmin(props) {
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  let [list, setList] = useState([]);
  const [reviewerName, setReviewer] = useState("");

  //  {{ }}
  const { accountName } = props;

  const handleNameChange = (value) => {
    setReviewer(value);
  };

  const handleInputChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://localhost:8446/getAssignments/${accountName}/${companyName}`
      )
      .then((res) => {
        setCompanyData(res.data);
        console.log(res.data);
      });
    getReviewers();
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const getReviewers = () => {
    axios.get(`https://localhost:8446/getReviewers`).then((res) => {
      setList(res.data);
      console.log(list);
    });
    setShowPopup(true);
  };

  return (
    <div>
      <input
        type="text"
        value={companyName}
        onChange={handleInputChange}
        placeholder="Enter Company Name..."
      />
      <button onClick={handleSearch}>Search</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handlePopupClose}>
              X
            </button>
            <Search onNameChange={handleNameChange} list={list} />
            <AdminPopup
              companyData={companyData}
              companyName={companyName}
              reviewerName={reviewerName}
              account={accountName}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPopupAdmin;
