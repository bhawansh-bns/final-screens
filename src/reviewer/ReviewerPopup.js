import React, { useState } from "react";
import Table from '../components/table/Table';
import axios from "axios";

const ReviewerPopup = ({ companyData, companyName }) => {
  const [reviewerFeedback, setReviewerFeedback] = useState("");

  const handleDownload = async () => {
    const url = `http://localhost:8449/acceptAssignment/Admin1/${companyName}/Reviewer1`;
    try {
      const response = await axios.get(url, { responseType: 'blob' });
      const urlObject = window.URL || window.webkitURL || window;
      const blobUrl = urlObject.createObjectURL(response.data);
      const downloadLink = document.createElement('a');
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
      .post(`http://localhost:8449/giveFeedback/Admin1/${companyName}/true/Reviewer1`, reviewerFeedback)
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
      .post(`http://localhost:8449/giveFeedback/Admin1/${companyName}/false/Reviewer1`, reviewerFeedback)
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
      <button onClick={handleDownload}> Dowload the application! </button>
      <input type="text" value={reviewerFeedback} onChange={handleInputChange} placeholder="Enter feedback..."/>
      <button onClick={handleAccept}> Accept </button>
      <button onClick={handleReject}> Reject </button>
    </div>
  );
};

export default ReviewerPopup;
