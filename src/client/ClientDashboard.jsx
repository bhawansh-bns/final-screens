import React, { useState } from "react";
import PageTemplate from "../components/template/PageTemplate";
import AllApplicationListing from "./AllApplicationListing";
import TotalApplications from "./TotalApplications";
import UploadFiles from "./UploadFiles";
import styles from './ClientDashboardStyles.module.css'

const ClientDashboard = () => {
 
  const [applicationCount, setApplicationCount] = useState(0);


  return (
    <PageTemplate>
  
      <div className={styles.dashboardContainer}>
        <h2>Applicant Dashboard</h2>
        <TotalApplications count={applicationCount} />

        {/* <AllApplicationListing applications={applications} onDelete={handleFileDelete}/> */}

        <UploadFiles />
      </div>

    </PageTemplate>
  );
};

export default ClientDashboard;
