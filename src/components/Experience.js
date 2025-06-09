import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experience.module.css";

const experienceData = [
  {
    companyName: "Valuemomentum Software Services",
    title: "Software Engineer",
    period: "Dec 2020 – Jul 2023",
    location: "Hyderabad, India",
    accomplishments: [
  <>Developed and maintained high-performance web applications using <strong>Java</strong> and <strong>Spring Boot</strong>, addressing real-time business requirements.</>,
  <>Designed microservice components with <strong>Spring Security</strong>, <strong>Spring Batch</strong>, and <strong>Spring Data JPA</strong>, increasing modularity by <strong>25%</strong> and improving runtime efficiency by <strong>20%</strong>.</>,
  <>Reduced API response times by <strong>40%</strong> by implementing efficient <strong>caching mechanisms</strong> and <strong>SQL optimizations</strong>. Tested RESTful APIs using <strong>Postman</strong> and automated validations with <strong>JUnit</strong> and <strong>Selenium</strong>.</>,
  <>Optimized <strong>Oracle</strong> and <strong>MySQL</strong> queries, reducing execution time by <strong>20%</strong>, and designed scalable database schemas to meet evolving application requirements.</>,
  <>Led API design, development, and unit testing using <strong>Swagger</strong> and <strong>Postman</strong>, ensuring high-quality, well-documented interfaces.</>,
  <>Utilized <strong>Docker</strong> for containerization and orchestrated deployments with <strong>Kubernetes</strong>, managing images through <strong>Azure Container Registry (ACR)</strong> to ensure scalable infrastructure.</>,
  <>Automated <strong>CI/CD pipelines</strong> using <strong>Jenkins</strong>, <strong>Maven</strong>, and <strong>Gradle</strong> within <strong>Azure DevOps</strong>, accelerating deployment cycles and reducing manual effort.</>,
  <>Handled 30+ change requests, improving system functionality, and resolved <strong>95%</strong> of production issues within SLA using <strong>Azure Boards</strong> and <strong>Jira</strong>.</>
],

    skills: [
  "Java","Hibernate", "Spring Boot", "Spring Security", "Spring Batch", "Spring Data JPA",
  "Docker", "Kubernetes", "Azure DevOps", "Azure Container Registry (ACR)",
  "SQL", "Oracle", "MySQL", "Postman", "Swagger",
  "Jenkins", "Maven", "Gradle", "JUnit", "Selenium",
  "Azure Boards", "Jira"
]
  },
  {
    companyName: "Electronic Corporation of India",
    title: "Software Intern",
    period: "Mar 2019 – May 2019",
    location: "Hyderabad, India",
    accomplishments: [
      <>Improved client financial transaction management by consolidating transactions onto a unified page.</>,
      <>Developed frontend pages and designed the database using <strong>Angular</strong>, <strong>Java</strong>, and <strong>MySQL</strong>.</>
    ],
    skills: [
      "Angular", "Java", "MySQL", "Frontend Development"
    ]
  }
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.expSection}>
       <h2 className={styles.title}>Experience</h2>
      {experienceData.map((exp, idx) => (
        <motion.div
          key={idx}
          className={styles.card}
          layout
          initial={{ borderRadius: 14 }}
          whileHover={{ scale: 1.01, boxShadow: "0 12px 30px rgba(64,191,255,0.13)" }}
        >
          <div className={styles.cardTop} onClick={() => handleToggle(idx)} style={{ cursor: 'pointer' }}>
            <div className={styles.cardHeader}>
              <div className={styles.titleCompany}>
                <span className={styles.title}>{exp.title}</span>
                <span className={styles.company}>{exp.companyName}</span>
              </div>
              <span className={styles.period}>{exp.period}</span>
            </div>
          </div>
          <div className={styles.location}>{exp.location}</div>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className={styles.accomplishments}>
                  <div className={styles.accomplishmentsHeader}>Accomplishments</div>
                  <ul>
                    {exp.accomplishments.map((acc, i) => (
                      <li key={i}><span>{acc}</span></li>
                    ))}
                  </ul>
                </div>
                <div className={styles.skills}>
                  <span className={styles.skillsHeader}>Skills Developed</span>
                  <div className={styles.skillList}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={styles.skillBadge}>{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            className={styles.toggleBtn}
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
          >
            {openIndex === idx ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
