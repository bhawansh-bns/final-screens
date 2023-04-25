import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import Table from '../components/table/Table';
import SearchPopup from "./SearchPopup";
import { Stack } from "@mui/material";
import "./ReviewerDashboardStyles.css";

const ReviewerDashboard = () => {
  const [applications, setApplications] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8449/getAssignmentsForReviewer/Reviewer1`
      );
      const json = await response.json();
      setApplications(json);
    };
    fetchData();
  }, []);

  return (
    <PageTemplate>
      <div className="reviewerDashboard" >
        <h2>Reviewer Dashboard</h2>
        <Table data={applications} />
        <SearchPopup/>
      </div>
    </PageTemplate>
  );  
};

export default ReviewerDashboard;
