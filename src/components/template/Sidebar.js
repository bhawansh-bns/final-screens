import React from "react";
import Button from "../button/Button";
import { FaBars } from "react-icons/fa";
import styles from "./SidebarStyles.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <Button className={styles.sidebarBtn}>
        <FaBars className={styles.sidebarIcon} />
      </Button>
      <div className={styles.sidebarMenu}>
        <Button className={styles.sidebarMenuItem}>Home</Button>
        <Button className={styles.sidebarMenuItem}>Acts & Rules</Button>
        <Button className={styles.sidebarMenuItem}>MCA Services</Button>
        <Button className={styles.sidebarMenuItem}>Data & Reports</Button>
        <Button className={styles.sidebarMenuItem}>Help & FAQ</Button>
      </div>
    </nav>
  );
};

export default Sidebar;
