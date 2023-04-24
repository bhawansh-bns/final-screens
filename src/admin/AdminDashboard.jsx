import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Table from "../testing/Table";
import styles from "./AdminDashboardStyles.module.css";
import Search from "./Search";

const AdminDashboard = () => {
  const [rows, setRows] = useState([]);
  const [companyData, setcompanyData] = useState([]);

  useEffect(() => {
    // Dummy data for initial rendering
    setRows([
      {
        id: 1,
        application: "Application 1",
        status: "Under Review",
        reviewers: "Dr. AP Patil",
      },
    ]);
  }, []);

  // Function to add a new row
  const handleAddRow = () => {
    // Dummy data for now
    const newRow = {
      id: rows.length + 1,
      application: "New Application",
      status: "Pending",
      reviewers: "Reviewer 1",
    };
    setRows([...rows, newRow]);
  };

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8443/getApplications/Admin1"
      );
      const json = await response.json();
      setApplications(json);
    };
    fetchData();
  }, []);

  const getAssignments = async () => {
    const response = await fetch(
      "http://localhost:8446/getAssignments/Admin1/CompanyName"
    );
    const json = await response.json();
    setcompanyData(json);
    console.log(json);
  };

  return (
    <PageTemplate>
      <Stack direction="column">
        <h2>Admin Dashboard</h2>
          <Table data={applications} />
          {/* <button onClick={getAssignments} >Get the assignments.</button> */}
          <Search />
      </Stack>
    </PageTemplate>
  );
};

export default AdminDashboard;
