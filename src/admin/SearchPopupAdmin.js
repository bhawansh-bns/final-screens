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

  const downloadApplication = async () => {
    const url = `https://localhost:8446/downloadApplication/${companyName}/${accountName}`;
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const urlObject = window.URL || window.webkitURL || window;
      const blobUrl = urlObject.createObjectURL(response.data);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = "file.zip";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.log(error);
      alert(
        "An error occurred while downloading the file. Please try again later."
      );
    }
  };

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          {/* <h1>{companyName}</h1> */}
          <button class="btn btn-primary my-3" onClick={downloadApplication}>
            Download Application
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
    </div>
  );
}

export default SearchPopupAdmin;
