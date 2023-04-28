import "./SearchStyles.css";
import React, { useState } from "react";

function Search(props) {
  const { onNameChange, list } = props;

  let list1 = [];

  list.forEach((element) => {
    list1.push(element);
  });

  // const [adminName, setAdmin] = useState("");
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    // setAdmin(searchTerm);
    setValue(searchTerm);
    onNameChange(searchTerm);
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} placeholder="Enter Name..."/>
          {/* <button onClick={() => onSearch(value)}>Search</button> */}
        </div>
        <div className="dropdown" style={{ width: "205px" }}>
          {list1
            .filter((item) => {
              const searchTerm = value;
              const item1 = item["Username"];
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
