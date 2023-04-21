import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AdminDashboardStyles.module.css";

const AdminDashboard = () => {
  const [rows, setRows] = useState([]);

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

  return (
    <PageTemplate>
      <h2>Admin Dashboard</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Applications</th>
              <th>Status</th>
              <th>Reviewers</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.application}</td>
                <td>{row.status}</td>
                <td>{row.reviewers}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.addButton} onClick={handleAddRow}>
          <AddIcon className={styles.addIcon} />
        </button>
      </div>
    </PageTemplate>
  );
};

export default AdminDashboard;
