// src/components/Education.jsx

import React from "react";
import styles from "./Education.module.css";

// import each logo
import kuLogo from "../assets/Kulogo.png";
import jntuLogo from "../assets/gnu.jpeg";

const educationData = [
  {
    degree: "Masters in Computer Science",
    school: "University of Kansas (KU), Lawrence, Kansas",
    logo: kuLogo,
    gpa: "3.6/ 4.0",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Advanced DataScience ",
      "Analysis of Algorithms ",
      "Embedded Machine Learning ",
      "Computer Vision ",
      "Programming Synthesis",
      "IoT Security"
    ],
    graduationDate: "May 2025"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "GuruNanak Institute of Technical Campus, Hyderabad, India",
    logo: jntuLogo,
    gpa: "8.6/ 10",
    coursework: [
      "Operating Systems",
      "OOPS - Java",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Cloud Computing "
    ],
    graduationDate: "September 2020"
  }
];

const Education = () => (
  <section className={styles.eduSection}>
    <h2 className={styles.title}>Education</h2>
    {educationData.map((edu, idx) => (
      <div key={idx} className={styles.eduItem}>
        <div className={styles.eduHeader}>
          <h3 className={styles.degree}>{edu.degree}</h3>
          <span className={styles.gpa}>{edu.gpa}</span>
        </div>

        {/* school name + logo side by side */}
        <div className={styles.schoolContainer}>
          <p className={styles.school}>{edu.school}</p>
          {edu.logo && (
            <img
              src={edu.logo}
              alt={`${edu.school} logo`}
              className={styles.schoolLogo}
            />
          )}
        </div>

        <p className={styles.gradDate}>Graduation: {edu.graduationDate}</p>

        <div className={styles.courseworkSection}>
          <div className={styles.courseHeader}>
            <strong>Relevant Coursework:</strong>
          </div>
          <ol className={styles.courseList}>
            {edu.coursework.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ol>
        </div>
      </div>
    ))}
  </section>
);

export default Education;
