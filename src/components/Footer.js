import React from "react";
import styles from './FooterStyles.module.css';

function Footer({ children }) {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  );
};

export default Footer;
