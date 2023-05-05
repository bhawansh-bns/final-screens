import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import UploadFiles from "./UploadFiles";
import ListApplications from "./ListApplications";
import TotalApplications from "./TotalApplications";
import Table from "../components/table/Table";
import axios from "axios";
import styles from "./ClientDashboardStyles.module.css";
import { useHistory } from "react-router-dom";
import { getApplications_response } from "../temp-variables/tempResponses";

const ClientDashboard = () => {
  const [applications, setApplications] = useState([]);
  const history = useHistory();
  let accountName;
  const [account, setAccount] = useState("");
  const fetchData = () => {
    // axios.get("http://localhost:3001/login").then((response) => {
    //   if (
    //     response.data.loggedIn === true &&
    //     response.data.user[0].role == "Applicant"
    //   ) {
    //     accountName = response.data.user[0].username;
    //     setAccount(accountName);
    //     loadApplications();
    //   } else {
    //     history.push("/sign-in");
    //   }
    // });
    loadApplications();
  };
  const loadApplications = () => {
    // axios
    //   .get(`https://localhost:8443/getApplications/${accountName}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setApplications(res.data);
    //   })
    //   .catch((err) => console.error(err));
    setApplications(getApplications_response);
  };

  useEffect(() => {
    fetchData();
  }, [accountName]);

  return (
    <PageTemplate>
      <div className={styles.dashboardContainer}>
        <h2>Applicant Dashboard</h2>
        <TotalApplications total={applications.length} />
        <h3>Upload Application</h3>
        <UploadFiles account={account} />
        <h3>My Application List</h3>
        {/* <ListApplications applications={applications} /> */}
        <Table data={applications} excludeColumns={[]} />

        <button onClick={loadApplications}>See All Applications</button>
      </div>
    </PageTemplate>
  );
};

export default ClientDashboard;
