import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({ children }) => (
  <h2 className={styles.sectionHeader}>{children}</h2>
);

export default SectionHeader;
