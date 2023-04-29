import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import Table from "../components/table/Table";
import SearchPopup from "./SearchPopup";
import { Stack } from "@mui/material";
import "./ReviewerDashboardStyles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ReviewerDashboard = () => {
  const [applications, setApplications] = useState([]);
  const history = useHistory();
  const [account, setAccount] = useState("");

  let accountName;
  const fetchData = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (
        response.data.loggedIn === true &&
        response.data.user[0].role == "Reviewer"
      ) {
        accountName = response.data.user[0].username;
        setAccount(accountName);
        loadApplications();
      } else {
        history.push("/sign-in");
      }
    });
  };
  const loadApplications = () => {
    axios
      .get(`https://localhost:8449/getAssignmentsForReviewer/${accountName}`)
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [accountName]);

  return (
    <PageTemplate>
      <div className="reviewerDashboard">
        <h2>Reviewer Dashboard</h2>
        <Table data={applications} />
        <SearchPopup accountName={account} />
      </div>
    </PageTemplate>
  );
};

export default ReviewerDashboard;
