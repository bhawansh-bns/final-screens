import React, { useState } from "react";
import AdminPopup from "./AdminPopup";
import Table from "../components/table/Table";

function Search({ account }) {
  const [companyName, setcompanyName] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    setcompanyName(event.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(
      `https://localhost:8446/getAssignments/${account}/${companyName}`
    );
    const data = await response.json();
    setCompanyData(data);
    setShowPopup(true);
    console.log(data);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
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

            <AdminPopup
              companyData={companyData}
              companyName={companyName}
              account={account}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
