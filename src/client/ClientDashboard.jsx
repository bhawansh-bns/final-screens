import React, { useState, useEffect } from "react";
import PageTemplate from "../components/template/PageTemplate";
import UploadFiles from "./UploadFiles";
import ListApplications from "./ListApplications";
import TotalApplications from "./TotalApplications";
import Table from "../testing/Table";
import axios from "axios";
import styles from "./ClientDashboardStyles.module.css";

function ClientDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get(
        "http://localhost:8443/getApplications/Applicant1"
      );
      const json = response.data;
      setApplications(json);
      // setData(json);
    };
    fetchData();
  }, []);

  const loadApplications = () => {
    axios
      .get("http://localhost:8443/getApplications/Applicant1")
      .then((res) => {
        console.log(res.data);
        setApplications(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <PageTemplate>
      <div className={styles.dashboardContainer}>
        <h2>Applicant Dashboard</h2>
        <TotalApplications total={applications.length} />
       <h3>Upload Application</h3>
        <UploadFiles />
        <h3>My Application List</h3>
        {/* <ListApplications applications={applications} /> */}
      <Table data={applications} excludeColumns={['Admin', 'Reviewer', 'Stage']} />

        <button onClick={loadApplications}>See All Applications</button>
      </div>
    </PageTemplate>
  );
}

export default ClientDashboard;
