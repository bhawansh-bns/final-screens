import React, { useState } from "react";
import Popup from "reactjs-popup";
import Table from "../testing/Table";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [companyData, setCompanyData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8446/getAssignments/Admin1/${inputValue}`);
    const data = await response.json();
    setCompanyData(data);
  };

  return (
    <Popup trigger={<button>Open Search</button>} position="center">
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Table data={companyData} />
      </div>
    </Popup>
  );
}

export default Search;
