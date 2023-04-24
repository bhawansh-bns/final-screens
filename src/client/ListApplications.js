import React from "react";
import './ListApplicationsStyles.css';

const ListApplications = ({ applications }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Acceptance</th>
            <th>App Id</th>
            <th>Stage</th>
            <th>Admin</th>
            <th>Applicant</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application["App Id"]}>
              <td>{application["CompanyName"]}</td>
              <td>{application["Acceptance"]}</td>
              <td>{application["App Id"]}</td>
              <td>{application["Stage"]}</td>
              <td>{application["Admin"]}</td>
              <td>{application["Applicant"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListApplications;
