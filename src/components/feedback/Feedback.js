import React, { useState, useEffect } from "react";
import PageTemplate from "../template/PageTemplate";
import Table from "../table/Table";
import { Stack } from "@mui/material";

import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  getLicences_response,
  getFeedback_response,
} from "../../temp-variables/tempResponses";

export default function Feedback() {
  const [companyName, setCompanyName] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [account, setAccount] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();
  let account1;
  let port1;
  const [port, setPort] = useState("");

  const getLicenses = () => {
    try {
      axios
        .get(`https://localhost:${port1}/getLicences/${account1}`)
        .then((res) => {
          console.log(res.data);
          setLicenses(res.data);
        });
    } catch (error) {
      console.log(error);
    }
    // setLicenses(getLicences_response);
  };
  const fetchData = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      console.log(response);
      if (
        response.data.loggedIn === true &&
        response.data.user[0].role == "Admin"
      ) {
        // accountName = response.data.user[0].username;
        port1 = 8446;
        setPort(8446);
        account1 = response.data.user[0].username;
        setAccount(account1);
        console.log(account);
        getLicenses();
      } else if (
        response.data.loggedIn === true &&
        response.data.user[0].role == "Applicant"
      ) {
        // accountName = response.data.user[0].username;
        port1 = 8443;
        setPort(8443);
        account1 = response.data.user[0].username;
        setAccount(account1);
        console.log(account);
        getLicenses();
      } else {
        history.push("/sign-in");
      }
    });
    // getLicenses();
  };

  //   const getFeedback = () => {
  //     axios
  //       .get(`https://localhost:8443/getFeedback/${accountName}/${companyName}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         setFeedback(res.data);
  //       });
  //   };

  useEffect(() => {
    fetchData();
  }, [account1]);

  const handleInputChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleGetFeedback = () => {
      console.log(port);
      axios
        .get(`https://localhost:${port}/getFeedback/${account}/${companyName}`)
        .then((res) => {
          console.log(res.data);
          setFeedback(res.data);
        });
      setShowPopup(true);
    // setFeedback(getFeedback_response);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <PageTemplate>
      <Stack direction="column">
        <h1>Licenses</h1>
        <Table data={licenses} />

        <input
          type="text"
          value={companyName}
          onChange={handleInputChange}
          placeholder="Enter Company Name..."
        />
        <button onClick={handleGetFeedback}>Search</button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={handlePopupClose}>
                X
              </button>
              <h1>Feedback.</h1>
              <Table data={feedback} />
            </div>
          </div>
        )}
      </Stack>
    </PageTemplate>
  );
}
