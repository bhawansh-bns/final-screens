import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchPopupAdmin from "../../admin/SearchPopupAdmin";
import styles from "./styles.css";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;
const Cards = ({ data, excludeColumns = [], account }) => {
  if (!data || !data.length) {
    return <h4>No Application Submitted Yet.</h4>;
  } else {
    console.log(data);
  }
  const [selectedApp, setSelectedApp] = useState([]);

  const filteredColumns = Object.keys(data[0]).filter(
    (key) => !excludeColumns.includes(key)
  );
  const setName = (item) => {
    setSelectedApp(item);
  };
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  }, []);
  const deleteApplication = (event) => {
    console.log(selectedApp["Applicant"]);
    console.log(selectedApp["CompanyName"]);
    event.preventDefault();
    axios
      .post(
        `https://localhost:8443/deleteApplication/${selectedApp["CompanyName"]}/${selectedApp["Applicant"]}`
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
      <div
        class="modal fade"
        id="applicationDetailsModal"
        tabindex="-1"
        aria-labelledby="applicationDetailsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" style={{ width: "650px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="applicationDetailsModalLabel">
                Application details
              </h1>
              <p></p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <dl class="row px-3">
                <dt class="col-sm-3 my-2">Company Name:</dt>
                <dd class="col-sm-9 my-2">{selectedApp["CompanyName"]}</dd>
                <dt class="col-sm-3 my-2">Application Id:</dt>
                <dd class="col-sm-9 my-2">{selectedApp["App Id"]}</dd>
                <dt class="col-sm-3 my-2">Review Stage:</dt>
                <dd class="col-sm-9 my-2">{selectedApp["Stage"]}</dd>
                <dt class="col-sm-3 my-2">Admin assigned:</dt>
                <dd class="col-sm-9 my-2">{selectedApp["Admin"]}</dd>
                <dt class="col-sm-3 my-2">Applicant:</dt>
                <dd class="col-sm-9 my-2">{selectedApp["Applicant"]}</dd>
                <dt class="col-sm-3 my-2">Last Modified:</dt>
                <dd class="col-sm-9 my-2">{selectedApp["Last Modified"]}</dd>
              </dl>
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  fontSize: "12px",
                  fontStyle: "italic",
                }}
              >
                {selectedApp["Stage"] == "rejected" ? (
                  <button
                    class="btn btn-outline-danger"
                    type="button"
                    aria-expanded="false"
                    onClick={deleteApplication}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div
              className="col-3"
              key={item.id}
              data-bs-toggle="modal"
              data-bs-target="#applicationDetailsModal"
              onClick={() => setName(item)}
            >
              <div
                className="card border border-primary-subtle rounded-3 mb-3"
                style={{ position: "relative" }}
              >
                <div class="mx-3 my-3">
                  {item.Stage == "submitted" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Application has been submitted to admin, no reviewers have been assigned yet."
                    >
                      <button type="button" class="btn btn-outline-info">
                        {item.Stage.toUpperCase()}
                      </button>
                    </span>
                  ) : item.Stage == "accepted" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Committee has accepted application, licence will be granted."
                    >
                      <button type="button" class="btn btn-outline-primary">
                        {item.Stage.toUpperCase()}
                      </button>
                    </span>
                  ) : item.Stage == "granted" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Licence has been granted."
                    >
                      <button type="button" class="btn btn-outline-success">
                        {item.Stage.toUpperCase()}
                      </button>
                    </span>
                  ) : item.Stage == "under_review" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Application is under the review of a committee."
                    >
                      <button type="button" class="btn btn-outline-warning">
                        UNDER REVIEW
                      </button>
                    </span>
                  ) : (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Application has been rejected by one or more reviewers."
                    >
                      <button type="button" class="btn btn-outline-danger">
                        {item.Stage.toUpperCase()}
                      </button>
                    </span>
                  )}
                </div>
                <div
                  className="card-body rounded-bottom-3 text-white"
                  style={{ background: "#00bfff" }}
                >
                  <h6 className="card-title">
                    Company Name: {item.CompanyName}
                  </h6>
                  <p className="card-text mb-5">
                    Application Id:{" "}
                    {item["App Id"].substring(0, 5) +
                      "..." +
                      item["App Id"].substring(item["App Id"].length - 5)}
                  </p>
                  <div
                    class="me-2"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      fontSize: "12px",
                      fontStyle: "italic",
                    }}
                  >
                    <p class="text-right mt-3">Click to see details.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
