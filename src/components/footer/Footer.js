import React from "react";
import styles from './FooterStyles.module.css';
import Button from "../button/Button";

function Footer({ children }) {
  return (
    <div className={styles.footer}>
      {children}
      <Button className={styles.footerbutton}>Learn</Button>
                <Button className={styles.footerbutton}>Support</Button>
                <Button className={styles.footerbutton}>About Us</Button>
                <Button className={styles.footerbutton}>Contact Us</Button>
    </div>
  );
};

export default Footer;
