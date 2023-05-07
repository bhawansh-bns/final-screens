import React, { useState } from "react";
import "./Table.css";
import SearchPopupAdmin from "../../admin/SearchPopupAdmin";

const Table = ({ data, excludeColumns = [], account }) => {
  if (!data || !data.length) {
    return <h4>Loading...</h4>;
  }

  const filteredColumns = Object.keys(data[0]).filter(
    (key) => !excludeColumns.includes(key)
  );
  const [companyName, setCompanyName] = useState("");
  const setName = (name) => {
    setCompanyName(name["CompanyName"]);
    console.log(companyName);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            {filteredColumns.map((key, index) => (
              <th key={index}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setName(row)}
            >
              {filteredColumns.map((key, index) => (
                <td key={index}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
