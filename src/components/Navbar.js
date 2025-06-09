import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>Adithya Merugu</div>
    <ul className={styles.navLinks}>
      <li><a href="#introduction">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
