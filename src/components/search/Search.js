import './SearchStyles.css';
import React, { useState } from "react";

function Search(props) {
  const {onAdminChange, list} = props;

  const [list1, setList] = useState([]);

  setList(list);

  // const [adminName, setAdmin] = useState("");
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    // setAdmin(searchTerm);
    setValue(searchTerm);
    onAdminChange(searchTerm);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input
            type="text"
            value={value}
            onChange={onChange}
          />
          <button onClick={() => onSearch(value)}>Search</button>
        </div>
        <div className="dropdown" style={{ width: "205px" }}>
          {list1
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const item1 = item["Username"].toLowerCase();
              return (
                searchTerm &&
                item1.startsWith(searchTerm) &&
                item1 !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item["Username"])}
                className="dropdown-row"
                key={item}
              >
                {item["Username"]}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;