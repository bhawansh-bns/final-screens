import Table from "../table/Table";
import { useState, useEffect } from "react";
import {
  getFeedback_response,
  getFeedbackForApplicant_response,
} from "../../temp-variables/tempResponses";

export default function Feedback({ account, companyName }) {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedback();
  }, [companyName]);
  const getFeedback = () => {
    //   console.log(port);
    //   axios
    //     .get(`https://localhost:${port}/getFeedback/${account}/${companyName}`)
    //     .then((res) => {
    //       console.log(res.data);
    //       setFeedback(res.data);
    //     });
    //   setShowPopup(true);
    setFeedback(getFeedbackForApplicant_response);
    // console.log(account);
    // console.log(companyName);
  };
  return (
    <div>
      <Table data={feedback} />
    </div>
  );
}
