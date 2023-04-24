import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AdminDashboardStyles.module.css";

const names = ["John Doe", "Jane Smith", "Bob Johnson", "Samantha Lee"];

const AdminDashboard = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        // Format data to match expected structure
        const formattedData = data.slice(0, 7).map((item, index) => ({
          id: index + 1,
          application: item.title,
          status: getStatus(index),
          reviewers: getRandomName(),
        }));
        setRows(formattedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getStatus = (index) => {
    if (index % 3 === 0) {
      return "Under Review";
    } else if (index % 3 === 1) {
      return "Reviewed";
    } else {
      return "Pending";
    }
  };

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  // Function to add a new row
  const handleAddRow = () => {
    // Dummy data for now
    const newRow = {
      id: rows.length + 1,
      application: "New Application",
      status: "Pending",
      reviewers: getRandomName(),
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
