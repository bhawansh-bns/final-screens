import React, { useState } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Tab } from "@mui/material";
import Table from "../components/table/Table";

function Feedback({ companyName, account }) {
  const [feedback, setFeedback] = useState([]);
  const [licenses, setLicenses] = useState([]);

  const getFeedback = () => {
    axios
      .get(`https://localhost:8443/getFeedback/${account}/${companyName}`)
      .then((res) => {
        console.log(res.data);
        setFeedback(res.data);
      });
  };

  const getLicenses = () => {
    axios.get(`https://localhost:8443/getLicences/${account}`).then((res) => {
      console.log(res.data);
      setLicenses(res.data);
    });
  };

  return (
    <div>
      <h1>Feedback.</h1>
      <Table data={feedback} />

      <h1>Licenses</h1>
      <Table data={licenses} />
    </div>
  );
}

export default Feedback();
