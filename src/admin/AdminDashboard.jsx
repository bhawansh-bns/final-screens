import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import axios from "axios";
import Table from "../components/table/Table";
import styles from "./AdminDashboardStyles.module.css";
import SearchPopupAdmin from "./SearchPopupAdmin";
import { useHistory } from "react-router-dom";

const AdminDashboard = () => {
  const [rows, setRows] = useState([]);
  const [applications, setApplications] = useState([]);
  const history = useHistory();

  let accountName;
  const fetchData = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (
        response.data.loggedIn === true &&
        response.data.user[0].role == "Admin"
      ) {
        accountName = response.data.user[0].username;
        loadApplications();
      } else {
        history.push("/sign-in");
      }
    });
  };
  const loadApplications = () => {
    axios
      .get(`https://localhost:8443/getApplications/${accountName}`)
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
      <Stack direction="column" className={styles.stackContainer}>
        <h2>Admin Dashboard</h2>
        <Table data={applications} />
        {/* <button onClick={getAssignments} >Get the assignments.</button> */}
        <SearchPopupAdmin adminName={accountName} />
      </Stack>
    </PageTemplate>
  );
};

export default AdminDashboard;
