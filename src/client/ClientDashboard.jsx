import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import UploadFiles from "./UploadFiles";
import TotalApplications from "./TotalApplications";
import Cards from "../components/ApplicantCard/Cards";
import axios from "axios";
import styles from "./ClientDashboardStyles.module.css";
import { useHistory } from "react-router-dom";
import { getApplications_response } from "../temp-variables/tempResponses";
const ClientDashboard = () => {
  const [applications, setApplications] = useState([]);
  const history = useHistory();
  let accountName;
  const [account, setAccount] = useState("");
  const fetchData = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (
        response.data.loggedIn === true &&
        response.data.user[0].role == "Applicant"
      ) {
        accountName = response.data.user[0].username;
        setAccount(accountName);
        loadApplications();
      } else {
        history.push("/sign-in");
      }
    });
    // loadApplications();
  };
  const loadApplications = () => {
    axios
      .get(`https://localhost:8443/getApplications/${accountName}`)
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => console.error(err));
    // setApplications(getApplications_response);
  };

  useEffect(() => {
    fetchData();
  }, [accountName]);

  return (
    <PageTemplate flag={true}>
      <div className="ms-2 p-3" style={{ width: "100%" }}>
        <div
          class="modal fade"
          id="newApplicationModal"
          tabindex="-1"
          aria-labelledby="newApplicationModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="newApplicationModalLabel">
                  New Application
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <UploadFiles account={account} />
              </div>
            </div>
          </div>
        </div>
        <h2 class="ms-2">Applicant Dashboard</h2>
        <div
          class="card my-4 ms-2"
          style={{ width: "18rem" }}
          data-bs-toggle="modal"
          data-bs-target="#newApplicationModal"
        >
          <div class="card-body">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-folder2"
                viewBox="0 0 16 16"
              >
                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
              </svg>
              <div>
                {/* <p class="card-text">Number of Applications</p> */}
                <h5 class="fs-3" style={{ textAlign: "center" }}>
                  {/* {applications.length} */}
                  New Application
                </h5>
              </div>
            </div>

            <h5 class="text-center mt-3">Click to Upload</h5>
          </div>
        </div>
        <h3 class="mb-4 ms-2">My Applications ({applications.length}) </h3>
        {/* <ListApplications applications={applications} /> */}
        <Cards data={applications} />
      </div>
    </PageTemplate>
  );
};

export default ClientDashboard;
