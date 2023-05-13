import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import SearchPopup from "./SearchPopup";
import { Stack } from "@mui/material";
import "./ReviewerDashboardStyles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getAssignmentsForReviewer_response } from "../temp-variables/tempResponses";
import Cards from "../components/ReviewerCard/Cards";

const ReviewerDashboard = () => {
  const [assignments,   setAssignments] = useState([]);
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
        loadAssignments();
      } else {
        history.push("/sign-in");
      }
    });
    
  };
  const loadAssignments = () => {
    axios
      .get(`https://localhost:8449/getAssignmentsForReviewer/${accountName}`)
      .then((res) => {
        console.log(res.data);
        setAssignments(res.data);
      })
      .catch((err) => console.error(err));
    // setAssignments(getAssignmentsForReviewer_response);
  };

  useEffect(() => {
    fetchData();
  }, [accountName]);

  return (
    <PageTemplate>
      <div className="reviewerDashboard">
        <h2>Reviewer Dashboard</h2>
        <Cards data={assignments} excludeColumns={[]} account={account} />
      </div>
    </PageTemplate>
  );
};

export default ReviewerDashboard;
