import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import ClientDashboard from "./client/ClientDashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import ReviewerDashboard from "./reviewer/ReviewerDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import TestingPage from "./testing/TestingPage";
import { Switch } from "react-router";
import Feedback from "./components/feedback/Feedback";

function App() {
  return (
    <Router>
      <Route path="/" exact render={(props) => <LandingPage />} />
      <Route path="/sign-in" exact render={(props) => <SignInPage />} />
      <Route path="/sign-up" exact render={(props) => <SignUpPage />} />
      <Route
        path="/client-dashboard"
        exact
        render={(props) => <ClientDashboard />}
      />
      <Route
        path="/admin-dashboard"
        exact
        render={(props) => <AdminDashboard />}
      />
      <Route
        path="/reviewer-dashboard"
        exact
        render={(props) => <ReviewerDashboard />}
      />
      <Route path="/feedback" exact render={(props) => <Feedback />} />
      <Route path="/testing" exact render={(props) => <TestingPage />} />
    </Router>
    // <ReviewerDashboard />
  );
}
export default App;
