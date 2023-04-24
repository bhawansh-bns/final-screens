import React from "react";
import "./Table.css";

const Table = ({ data, excludeColumns = [] }) => {
  if (!data || !data.length) {
    return <h4>Loading...</h4>;
  }

  const filteredColumns = Object.keys(data[0]).filter(
    (key) => !excludeColumns.includes(key)
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {filteredColumns.map((key, index) => (
              <th key={index}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
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
