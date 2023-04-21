import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import GetAppIcon from "@mui/icons-material/GetApp";
import styles from "./ReviewerDashboardStyles.module.css";

const ReviewerDashboard = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Dummy data for initial rendering
    setRows([
      {
        id: 1,
        assignments: "Application 1",
        status: "Assigned",
        review: "",
      },
      {
        id: 2,
        assignments: "Application 2",
        status: "Assigned",
        review: "",
      },
    ]);
  }, []);

  // Function to add a new row
  const handleAddRow = () => {
    // Dummy data for now
    const newRow = {
      id: rows.length + 1,
      assignments: "New Application",
      status: "Assigned",
      review: "",
    };
    setRows([...rows, newRow]);
  };

  // Function to download application
  const handleDownloadApplication = (assignment) => {
    // Dummy download functionality for now
    alert(`Downloading ${assignment} application...`);
  };

  // Function to handle feedback form submission
  const handleFeedbackSubmit = (id, review) => {
    if (review.trim()) {
      setRows(rows.map((row) => (row.id === id ? { ...row, review } : row)));
    }
  };
  // Function to handle view feedback button click
  const handleViewFeedback = (review) => {
    alert(`Feedback: ${review}`);
  };

 // Function to handle accept button click
const handleAcceptClick = (rowId) => {
    setRows(
      rows.map((row) => {
        if (row.id === rowId) {
          return { ...row, status: "Accepted" };
        }
        return row;
      })
    );
  };
  
  // Function to handle reject button click
  const handleRejectClick = (rowId) => {
    setRows(
      rows.map((row) => {
        if (row.id === rowId) {
          return { ...row, status: "Rejected" };
        }
        return row;
      })
    );
  };  

  return (
    <PageTemplate>
      <h2>Reviewer Dashboard</h2>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Assignments</th>
              <th>Status</th>
              <th>View Application</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.assignments}</td>
                <td>{rows.find((r) => r.id === row.id)?.status}</td>
                <td>
                  <button
                    className={styles.downloadButton}
                    onClick={() => handleDownloadApplication(row.assignments)}
                  >
                    <GetAppIcon className={styles.downloadIcon} />
                  </button>
                </td>
                <td>
                  {row.review ? (
                    <>
                      <button
                        className={styles.feedbackButton}
                        onClick={() => handleViewFeedback(row.review)}
                      >
                        View Feedback
                      </button>
                      {row.status === "Assigned" && (
                        <div className={styles.acceptRejectButtons}>
                          <button
                            className={styles.acceptButton}
                            onClick={() => handleAcceptClick(row.id)}
                          >
                            Accept
                          </button>
                          <button
                            className={styles.rejectButton}
                            onClick={() => handleRejectClick(row.id)}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      className={styles.feedbackButton}
                      onClick={() => {
                        const review = prompt("Enter review:");
                        if (review) {
                          handleFeedbackSubmit(row.id, review);
                        }
                      }}
                    >
                      Provide Feedback
                    </button>
                  )}
                </td>
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

export default ReviewerDashboard;
