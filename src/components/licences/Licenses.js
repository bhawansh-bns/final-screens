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
import Feedback from "./Feedback";

export default function Licenses() {
  const [companyName, setCompanyName] = useState("");
  const [licenses, setLicenses] = useState([]);
  const [account, setAccount] = useState("");
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


  return (
    <PageTemplate>
      <Stack direction="column">
        <div
          class="modal fade"
          id="feedbackModal"
          tabindex="-1"
          aria-labelledby="feedbackModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" style={{ width: "650px" }}>
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="feedbackModalLabel">
                  Feedback
                </h1>
                <p></p>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Feedback companyName={companyName} account={account} />
              </div>
            </div>
          </div>
        </div>
        <div class="ms-4 mt-4">
          <h1>Licenses</h1>
          <Table data={licenses} />
        </div>
        <input
          class="form-control ms-4 my-4"
          style={{ width: "400px" }}
          type="text"
          value={companyName}
          onChange={handleInputChange}
          placeholder="Enter Company Name for feedback..."
        />
        <button
          class="btn btn-primary ms-4 mb-4"
          data-bs-toggle="modal"
          data-bs-target="#feedbackModal"
          style={{ width: "250px" }}
        >
          Search
        </button>
      </Stack>
    </PageTemplate>
  );
}

// Feedback.propTypes = {
//   accountName: PropTypes.string,
// };
