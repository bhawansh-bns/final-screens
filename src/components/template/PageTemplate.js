import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PageTemplate = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar style={{ height: "100%" }} />
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
