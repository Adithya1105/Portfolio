import React from "react";
import styles from "./Certifications.module.css";

const certifications = [
  {
    name: "AWS Certified Developer Associate",
    url: "https://www.credly.com/badges/c3edf28a-8820-4c37-9405-d4f9660c4299/linked_in_profile",
  },
  {
    name: "Career Essentials in Generative AI by Microsoft",
    url: "https://www.linkedin.com/learning/certificates/a4c865f6101b76ee00efd451f75c5ecc32d1f1372ee2bc2219ffc3618fffbcb1?trk=share_certificate",
  },
];

const Certifications = () => (
  <div>
     <h2 className={styles.title}>Certifications</h2>
    <ul className={styles.certList}>
      {certifications.map((cert, idx) => (
        <li key={idx} className={styles.certItem}>
          <span className={styles.certName}><strong>{cert.name}</strong></span>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewLink}
          >
            View
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Certifications;
