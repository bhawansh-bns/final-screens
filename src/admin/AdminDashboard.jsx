import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import axios from "axios";
import Table from '../components/table/Table';
import styles from "./AdminDashboardStyles.module.css";
import SearchPopupAdmin from "./SearchPopupAdmin";

const AdminDashboard = () => {
  const [rows, setRows] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8446/getApplications/Admin1");
        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  


  return (
    <PageTemplate>
      <Stack direction="column" className={styles.stackContainer}>
        <h2>Admin Dashboard</h2>
          <Table data={applications} />
          {/* <button onClick={getAssignments} >Get the assignments.</button> */}
          <SearchPopupAdmin />
      </Stack>
    </PageTemplate>
  );
};

export default AdminDashboard;
