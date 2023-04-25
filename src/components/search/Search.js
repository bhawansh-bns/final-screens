import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

let reviewer_list = [];
const options = {
  method: "GET",
  url: "http://localhost:8449/getReviewers",
};

async function getData() {
  axios
    .request(options)
    .then(function(response) {
      reviewer_list = response.data;
    })
    .catch(function(error) {
      console.error(error);
    });
}
let data = getData();


function Search() {
  const { isLoading, error, data1 } = useQuery({
    queryFn: () => axios.request(options),
  });

  console.log(data1);
  const [value, setValue] = useState("");
  const [reviewer, setReviewer] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setReviewer(searchTerm);
    setValue(searchTerm);
    // for(let k in dict){
    //   if(dict[k]['name'].includes(searchTerm)){
    //     setId(dict[k]['id'])
    //     setName(dict[k]['name'])
    //   }

    //}
  };
  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;
  return (
    <div className="App">
      <h1>Search for Reviewer</h1>
      <div className="search-container">
        <div className="search-inner">
          <input
            id="reviewer_name"
            type="text"
            value={value}
            onChange={onChange}
          />
          <button onClick={() => onSearch(value)}>Search</button>
        </div>
        <div className="dropdown" style={{ width: "205px" }}>
          {reviewer_list
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
      {/* <div>
              <h2>{id?`(${id}: ${pok_nam})`:''}</h2></div>     */}
    </div>
  );
}

export default Search;