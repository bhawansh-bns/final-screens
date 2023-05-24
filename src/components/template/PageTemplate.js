import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "popper.js";

const PageTemplate = ({ children, flag }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar style={{ height: "100%" }} flag={flag} />
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
