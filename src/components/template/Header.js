import React from "react";
import Button from "../Button";
import styles from "./HeaderStyles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Button className={styles.logoBtn}>
        <img
          src=""
          className={styles.logo}
        />
        Grep E-Licensing
      </Button>

      
      <div className={styles.contact}>
        <Button className={styles.contactBtn}>
          UserInfo
        </Button>
      </div>
    </header>
  );
};

export default Header;
