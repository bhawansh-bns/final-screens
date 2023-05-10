import "./SearchStyles.css";
import React, { useState } from "react";

function Search(props) {
  const { onNameChange, list } = props;
  const [option, setOption] = useState(false);

  let list1 = [];

  list.forEach((element) => {
    list1.push(element);
  });

  // const [adminName, setAdmin] = useState("");
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const openDropdown = (event) => {
    setOption(true);
  };
  const closeDropdown = (event) => {
    setOption(false);
    setValue("");
  };
  const onSearch = (searchTerm) => {
    // setAdmin(searchTerm);
    setValue(searchTerm);
    onNameChange(searchTerm);
    setOption(false);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input
            class="form-control"
            type="text"
            value={value}
            onChange={onChange}
            onFocus={openDropdown}
            placeholder="Enter Name..."
          />
          <button class="btn btn-danger mx-2" onClick={closeDropdown}>
            Clear
          </button>
          {/* <button onClick={() => onSearch(value)}>Search</button> */}
        </div>
        {option && (
          <div
            className="dropdown border border-top-0 border-primary-subtle border-2 rounded-bottom"
            style={{ width: "200px" }}
          >
            {list1
              .filter((item) => {
                const searchTerm = value;
                const item1 = item["Username"];
                return item1.startsWith(searchTerm) && item1 !== searchTerm;
              })
              .slice(0, 5)
              .map((item) => (
                <div
                  className="dropdown-row p-2"
                  onClick={() => onSearch(item["Username"])}
                  key={item}
                >
                  {item["Username"]}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
