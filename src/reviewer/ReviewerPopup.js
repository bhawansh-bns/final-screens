import React, { useState } from "react";
import Table from "../components/table/Table";
import axios from "axios";

const ReviewerPopup = ({ companyData, companyName, accountName }) => {
  const [reviewerFeedback, setReviewerFeedback] = useState("");
  const handleDownload = async () => {
    const url = `https://localhost:8449/acceptAssignment/${companyName}/${accountName}`;
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const urlObject = window.URL || window.webkitURL || window;
      const blobUrl = urlObject.createObjectURL(response.data);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = "file.zip";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.log(error);
      alert(
        "An error occurred while downloading the file. Please try again later."
      );
    }
  };

  const handleInputChange = (event) => {
    setReviewerFeedback(event.target.value);
  };

  const handleAccept = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://localhost:8449/giveFeedback/${companyName}/true/${accountName}`,
        reviewerFeedback
      )
      .then((response) => {
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://localhost:8449/giveFeedback/${companyName}/false/${accountName}`,
        reviewerFeedback
      )
      .then((response) => {
        alert(JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Table data={companyData} />
      <button onClick={handleDownload}> Download the application! </button>
      <input
        type="text"
        value={reviewerFeedback}
        onChange={handleInputChange}
        placeholder="Enter feedback..."
      />
      <button onClick={handleAccept}> Accept </button>
      <button onClick={handleReject}> Reject </button>
    </div>
  );
};

export default ReviewerPopup;
