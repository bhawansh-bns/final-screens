import React, { useState } from "react";
import Table from "../testing/Table";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:8446/getAssignments/Admin1/${inputValue}`);
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
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handlePopupClose}>
              X
            </button>
            <Table data={companyData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
