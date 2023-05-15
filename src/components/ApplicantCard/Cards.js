import React, { useState } from "react";
import SearchPopupAdmin from "../../admin/SearchPopupAdmin";
import styles from "./styles.css";

const Cards = ({ data, excludeColumns = [], account }) => {
  if (!data || !data.length) {
    return <h4>Loading...</h4>;
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
  const deleteApplication = () => {
    console.log(selectedApp["Applicant"]);
    console.log(selectedApp["CompanyName"]);
    // event.preventDefault();
    // axios
    //   .post(
    //     `https://localhost:8443/deleteApplication/Test/Applicant1`
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
                <dd class="col-sm-9 my-2">{selectedApp["App_Id"]}</dd>
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
              </div>
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
              data-bs-target="#applicationDetailsModal"
              onClick={() => setName(item)}
            >
              <div
                className="card border border-primary-subtle rounded-3 mb-3"
                style={{ position: "relative" }}
              >
                <div class="mx-3 my-3">
                  {item.Stage == "submitted" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-cloud-upload"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                      />
                    </svg>
                  ) : item.Stage == "accepted" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-card-checklist"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                  ) : item.Stage == "granted" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-currency-rupee"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                    </svg>
                  ) : item.Stage == "under_review" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-hourglass-split"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  )}
                </div>
                <div
                  className="card-body rounded-bottom-3 text-white"
                  style={{ background: "#00bfff" }}
                >
                  <h6 className="card-title">
                    Company Name: {item.CompanyName}
                  </h6>
                  <p className="card-text">Stage: {item.Stage}</p>

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
                    <p class="text-right mt-3">Click to see details</p>
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
