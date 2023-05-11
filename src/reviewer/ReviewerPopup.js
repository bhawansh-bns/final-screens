import React, { useState } from "react";
import Table from "../components/table/Table";
import axios from "axios";

const ReviewerPopup = ({ companyData, companyName, accountName }) => {
  const [reviewerFeedback, setReviewerFeedback] = useState("");
  const handleDownload = async () => {
    const url = `https://localhost:8449/acceptAssignment/${companyName}/${accountName}`;
    // try {
    //   const response = await axios.get(url, { responseType: "blob" });
    //   const urlObject = window.URL || window.webkitURL || window;
    //   const blobUrl = urlObject.createObjectURL(response.data);
    //   const downloadLink = document.createElement("a");
    //   downloadLink.href = blobUrl;
    //   downloadLink.download = "file.zip";
    //   document.body.appendChild(downloadLink);
    //   downloadLink.click();
    //   document.body.removeChild(downloadLink);
    // } catch (error) {
    //   console.log(error);
    //   alert(
    //     "An error occurred while downloading the file. Please try again later."
    //   );
    // }
  };

  const handleInputChange = (event) => {
    setReviewerFeedback(event.target.value);
  };

  const handleAccept = (event) => {
    // event.preventDefault();
    // axios
    //   .post(
    //     `https://localhost:8449/giveFeedback/${companyName}/true/${accountName}`,
    //     reviewerFeedback
    //   )
    //   .then((response) => {
    //     alert(JSON.stringify(response.data));
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleReject = (event) => {
    // event.preventDefault();
    // axios
    //   .post(
    //     `https://localhost:8449/giveFeedback/${companyName}/false/${accountName}`,
    //     reviewerFeedback
    //   )
    //   .then((response) => {
    //     alert(JSON.stringify(response.data));
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <Table data={companyData} excludeColumns={["App_Id"]} />
      <button class="btn btn-primary my-2" onClick={handleDownload}>
        View the application
      </button>
      <input
        class="form-control my-2"
        type="text"
        style={{ width: "24rem" }}
        value={reviewerFeedback}
        onChange={handleInputChange}
        placeholder="Enter feedback..."
      />
      <button class="btn btn-success my-2 me-4" onClick={handleAccept}>
        Accept
      </button>
      <button class="btn btn-danger my-2" onClick={handleReject}>
        Reject
      </button>
    </div>
  );
};

export default ReviewerPopup;
