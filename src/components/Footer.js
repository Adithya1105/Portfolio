import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} Adithya Mergu. All rights reserved.
  </footer>
);

export default Footer;
