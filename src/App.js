import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AddReviewerssPopUp from "./pages/reviewer/AddReviewerssPopUp";
import ClientPopUp from "./pages/client/ClientPopUp";
import LandingPage from "./global/LandingPage";
import SignUpPage from "./global/SignUpPage";
import LoginPage from "./global/LoginPage";
import ClientApplicationDashboard from "./pages/client/ClientApplicationDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";
import ReviewerDashboard from "./pages/reviewer/ReviewerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ReviewersPopUp from "./pages/reviewer/ReviewersPopUp";
import AdminsApplicationPopUp from "./pages/admin/AdminsApplicationPopUp";
import ReviewersApplicationPopUp from "./pages/reviewer/ReviewersApplicationPopUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/client-pop-up":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/client-application-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/client-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/reviewer-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/reviewers-pop-up":
        title = "";
        metaDescription = "";
        break;
      case "/admins-application-pop-up":
        title = "";
        metaDescription = "";
        break;
      case "/reviewers-application-pop-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AddReviewerssPopUp />} />
      <Route path="/client-pop-up" element={<ClientPopUp />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route
        path="/client-application-dashboard"
        element={<ClientApplicationDashboard />}
      />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/reviewer-dashboard" element={<ReviewerDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/reviewers-pop-up" element={<ReviewersPopUp />} />
      <Route
        path="/admins-application-pop-up"
        element={<AdminsApplicationPopUp />}
      />
      <Route
        path="/reviewers-application-pop-up"
        element={<ReviewersApplicationPopUp />}
      />
    </Routes>
  );
}
export default App;
