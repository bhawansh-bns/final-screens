import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import styles from "./HeaderStyles.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const history = useHistory();
  const logout = () => {
    axios.post("http://localhost:3001/logout", {}).then((response) => {
      if (response.data.message) {
        console.log("logged out");
        history.push("/sign-in");
      } else {
        console.log("Log in first");
        history.push("/");
      }
    });
  };
  return (
    <header className={styles.header}>
      <Link to={"/sign-in"}>
        <Button className={styles.logoBtn}>
          <img src="" className={styles.logo} alt="" />
          Grep E-Licensing
        </Button>
      </Link>
      <Link to={"/feedback"}>
        <Button className={styles.logoBtn}>
          <img src="" className={styles.logo} alt="" />
          Licences and Feedback
        </Button>
      </Link>
      <div className={styles.contact}>
        <Button className={styles.contactBtn}>UserInfo</Button>
        <Button className={styles.logoBtn} onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
