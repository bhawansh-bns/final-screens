import React, { useState } from "react";
import PageTemplate from "../components/template/PageTemplate";
import UploadFiles from "./UploadFiles";
import styles from './ClientDashboardStyles.module.css'

const ClientDashboard = () => {
 
  const [applicationCount, setApplicationCount] = useState(0);
  const applications = [
    {
      "CompanyName": "Test",
      "Acceptance": "true",
      "App Id": "5b1665d6-33c0-4207-86d7-53e3bbd09d09",
      "Stage": "submitted",
      "Admin": "Admin1",
      "Applicant": "Applicant1"
  },
  {
      "CompanyName": "Testhari",
      "Acceptance": "true",
      "App Id": "82abd784-c4e3-4182-af64-82d81d959b98",
      "Stage": "submitted",
      "Admin": "Admin1",
      "Applicant": "Applicant1"
  }
  ]


  return (
    <PageTemplate>
  
      <div className={styles.dashboardContainer}>
        <h2>Applicant Dashboard</h2>
       

        <UploadFiles />
        
      </div>

    </PageTemplate>
  );
};

export default ClientDashboard;
