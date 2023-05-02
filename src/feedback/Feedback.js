import React, { useState } from "react";
import PageTemplate from "../components/template/PageTemplate";
import { Tab } from "@mui/material";
import Table from "../components/table/Table";

function Feedback({companyName}){

    const [feedback, setFeedback] = useState([]);
    const [licenses, setLicenses] = useState([]);

    const getFeedback = () => {
        axios.get(`https://localhost:8443/getFeedback/Admin1/${companyName}`).then((res) => {
            console.log(res.data);
            setFeedback(res.data);
        });
    };

    const getLicenses = () => {
        axios.get(`https://localhost:8443/getLicences/Applicant1`).then((res) => {
            console.log(res.data);
            setLicenses(res.data);
        });
    };


    return(
        <div>

            <h1>Feedback.</h1>
            <Table data={feedback} />
            
            <h1>Licenses</h1>
            <Table data={licenses} />


        </div>
    )
};


export default Feedback();