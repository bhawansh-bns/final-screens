import Table from "../table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  getFeedback_response,
  getFeedbackForApplicant_response,
} from "../../temp-variables/tempResponses";

export default function Feedback({ account, companyName, port }) {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedback();
  }, [companyName]);

  const getFeedback = () => {
    axios
      .get(`https://localhost:${port}/getFeedback/${account}/${companyName}`)
      .then((res) => {
        setFeedback(res.data);
      });

    // setFeedback(getFeedbackForApplicant_response);
  };
  return (
    <div>
      <Table data={feedback} />
    </div>
  );
}
