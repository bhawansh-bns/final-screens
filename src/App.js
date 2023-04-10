import React from "react";
import { useEffect } from "react";
import LandingPage from "./LandingPage/LandingPage";
import ClientDashboard from "./client/ClientDashboard";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
    </Routes>
  );
}
export default App;
