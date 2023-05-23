import React, { useState, useEffect } from "react";
import SearchPopup from "../../reviewer/SearchPopup";
import styles from "./styles.css";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;
const Cards = ({ data, excludeColumns = [], account }) => {
  if (!data || !data.length) {
    return <h4>No Applications to Review Yet.</h4>;
  } else {
    console.log(data);
  }

  const filteredColumns = Object.keys(data[0]).filter(
    (key) => !excludeColumns.includes(key)
  );
  const [companyName, setCompanyName] = useState("");
  const setName = (name) => {
    setCompanyName(name["CompanyName"]);
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
        class="modal fade"
        id="getAssignmentsModal"
        tabindex="-1"
        aria-labelledby="getAssignmentsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="getAssignmentsModalLabel">
                {companyName}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {companyName ? (
                <SearchPopup accountName={account} companyName={companyName} />
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
                <div class="mx-3 my-3">
                  {item.Stage == "assigned" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Please accept the assignment."
                    >
                      <button type="button" class="btn btn-outline-primary">
                        {item.Stage.toUpperCase()}
                      </button>
                    </span>
                  ) : item.Stage == "reviewed" ? (
                    <span
                      class="d-inline-block"
                      tabindex="0"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover focus"
                      data-bs-content="Review is done."
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
                      data-bs-content="Please complete the review."
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
                      data-bs-content="Assignment has expired, wait for reassignment."
                    >
                      <button type="button" class="btn btn-outline-dark">
                        {item.Stage.toUpperCase()}
                      </button>
                    </span>
                  )}
                </div>
                <div
                  className="card-body rounded-bottom-3 text-white"
                  style={{ background: "#f6626b" }}
                >
                  <h6 className="card-title">
                    Company Name: {item.CompanyName}
                  </h6>
                  <p className="card-text mb-5">Stage: {item.Stage}</p>
                  <div
                    class="me-2"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      fontSize: "15px",
                      fontStyle: "italic",
                    }}
                  >
                    <p class="text-right mt-3">Click to review.</p>
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
