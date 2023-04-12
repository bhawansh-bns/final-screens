import { useEffect } from "react";
import LandingPage from "./LandingPage/LandingPage";
import ClientDashboard from "./client/ClientDashboard";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
export default App;
