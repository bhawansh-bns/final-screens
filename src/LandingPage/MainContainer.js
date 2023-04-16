import React from "react";
import Button from "../components/Button";
import styles from "./LandingPageStyles.module.css";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className={styles.maincontainer}>
      <div>Grep E-Licensing</div>

      <Button style={{ marginBottom: "40px" }}>
        {" "}
        <img src="photoCV.jpeg" />{" "}
      </Button>

      <div style={{ marginBottom: "10px", marginTop: "15px" }}>New user?</div>
      <Link to="/sign-up">
        <Button>Sign Up</Button>
      </Link>

      <div style={{ marginBottom: "10px", marginTop: "15px" }}>
        Already have an account?
      </div>
      <Link to="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </div>
  );
};

export default MainContainer;
