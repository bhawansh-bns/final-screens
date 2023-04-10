import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignUp from "../components/SignUp";
import styles from "./SignUpPageStyles.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.landingpage}>
      <div className={styles.container}>
        <SignUp />
      </div>
      <Footer className={styles.footer}>
        <Button className={styles.footerbutton}>Learn</Button>
        <Button className={styles.footerbutton}>Support</Button>
        <Button className={styles.footerbutton}>About Us</Button>
        <Button className={styles.footerbutton}>Contact Us</Button>
      </Footer>
    </div>
  );
};

export default SignUpPage;
