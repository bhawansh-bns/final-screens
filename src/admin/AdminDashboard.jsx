import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Stack } from "@mui/material";
import axios from "axios";
import Table from "../components/table/Table";
import styles from "./AdminDashboardStyles.module.css";
import SearchPopupAdmin from "./SearchPopupAdmin";
import { useHistory } from "react-router-dom";
import { getApplications_response } from "../temp-variables/tempResponses";
import Cards from "../components/AdminCard/Cards";
const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [account, setAccount] = useState("hi");
  const history = useHistory();
  let account1;

  const fetchData = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (
        response.data.loggedIn === true &&
        response.data.user[0].role == "Admin"
      ) {
        // accountName = response.data.user[0].username;

        account1 = response.data.user[0].username;
        setAccount(account1);
        console.log(account);
        loadApplications();
      } else {
        history.push("/sign-in");
      }
    });
    // loadApplications();
  };
  const loadApplications = () => {
    axios
      .get(`https://localhost:8446/getApplications/${account1}`)
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => console.error(err));
    // setApplications(getApplications_response);
  };

  useEffect(() => {
    fetchData();
  }, [account1]);

  return (
    <PageTemplate flag={true}>
      <Stack
        direction="column"
        className={styles.stackContainer}
        style={{ width: "100%" }}
      >
        <h2 class="mx-3">Admin Dashboard</h2>
        <br />
        <Cards data={applications} excludeColumns={[]} account={account} />
        {/* <button onClick={getAssignments} >Get the assignments.</button> */}
      </Stack>
    </PageTemplate>
  );
};

export default AdminDashboard;
