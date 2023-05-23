import React, { useState, useEffect } from "react";
import SearchPopupAdmin from "../../admin/SearchPopupAdmin";
import styles from "./styles.css";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;
const Cards = ({ data, excludeColumns = [], account }) => {
  if (!data || !data.length) {
    return <h4>No Applications Received Yet.</h4>;
  } else {
    console.log(data);
  }

  const filteredColumns = Object.keys(data[0]).filter(
    (key) => !excludeColumns.includes(key)
  );

  let companyName1, stage1;

  const [companyName, setCompanyName] = useState("");
  const [stage, setStage] = useState("");
  const setName = (row) => {
    companyName1 = row["CompanyName"];
    setCompanyName(companyName1);
    stage1 = row["Stage"];
    setStage(stage1);
    console.log(companyName);
  };
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  }, []);
  return (
    <div>
      <div
        className="modal fade"
        id="getAssignmentsModal"
        tabindex="-1"
        aria-labelledby="getAssignmentsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="getAssignmentsModalLabel">
                Assignments for {companyName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {companyName ? (
                <SearchPopupAdmin
                  accountName={account}
                  companyName={companyName}
                  stage={stage}
                />
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div
              className="col-md-3 mb-2"
              key={item.id}
              data-bs-toggle="modal"
              data-bs-target="#getAssignmentsModal"
              onClick={() => setName(item)}
            >
              <div className="card border border-primary-subtle rounded-3 mb-3">
                <div className="mx-3 my-3">
                  {item.Stage == "submitted" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Please assign reviewers."
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
                      data-bs-content="Relay feedback to applicant and grant licence."
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
                      data-bs-content="Application is under the review of assigned committee."
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
                  style={{ background: "#9370DB" }}
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
                    class="me-2 mt-3"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      fontSize: "12px",
                      fontStyle: "italic",
                    }}
                  >
                    <p class="text-right">Click to review.</p>
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
