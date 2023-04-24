import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import styles from "./HeaderStyles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={'/sign-in'}>
      <Button className={styles.logoBtn}>
        <img
          src=""
          className={styles.logo}
          alt=""
        />
        Grep E-Licensing
      </Button>
      </Link>

      
      <div className={styles.contact}>
        <Button className={styles.contactBtn}>
          UserInfo
        </Button>
      </div>
    </header>
  );
};

export default Header;
