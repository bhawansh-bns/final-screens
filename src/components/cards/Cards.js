import React, { useState } from "react";
import SearchPopupAdmin from "../../admin/SearchPopupAdmin";

const Cards = ({ data, excludeColumns = [], account }) => {
  if (!data || !data.length) {
    return <h4>Loading...</h4>;
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
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <SearchPopupAdmin
                accountName={account}
                companyName={companyName}
              />
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
              data-bs-target="#exampleModal"
              onClick={() => setName(item)}
            >
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.CompanyName}</h5>
                  <p className="card-text">{item.Stage}</p>
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
