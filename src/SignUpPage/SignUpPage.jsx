import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignUp from "./SignUp";
import styles from "./SignUpPageStyles.module.css";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className={styles.container}>
      <div className={styles.signupContainer}>
        <h2>Create an Account</h2>
        <SignUp />
        <div className={styles.signInLink}>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
      <Footer className={styles.footer}>
        <Button className={styles.footerbutton}>Learn</Button>
        <Button className={styles.footerbutton}>Support</Button>
        <Button className={styles.footerbutton}>About Us</Button>
        <Button className={styles.footerbutton}>Contact Us</Button>
      </Footer>
    </div>
  );
}

export default SignUpPage;
