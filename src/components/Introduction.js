import React from "react";
import styles from "./Introduction.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import bgImage from "../assets/3274764.jpg";

const socialLinks = [
  { icon: <FaEnvelope />,  url: "mailto:adithyamerugu072@gmail.com",  label: "Email" },
  { icon: <FaGithub />,    url: "https://github.com/Adithya1105", label: "GitHub" },
  { icon: <FaLinkedin />,  url: "https://www.linkedin.com/in/adithyamerugu", label: "LinkedIn" },
];

const avatarSrc      = "/linkedin.jpeg";
const fallbackAvatar = "https://ui-avatars.com/api/?name=Adithya+Mergu&background=2563eb&color=fff";

export default function Introduction() {
  return (
    <>
      {}
      <div
        className={styles.bg}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6), rgba(126, 184, 215, 0.6)),
            url(${bgImage})
          `
        }}
      />

      <main className={styles.centerBox} data-aos="fade-up">
        <h1 className={styles.name}>
          <Typewriter
            words={['Adithya Merugu']}
            loop={2}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        
       <p className={styles.tagline}>Full Stack Developer</p>


        <img
          src={avatarSrc}
          alt="Adithya Merugu"
          className={styles.avatar}
          onError={e => { e.currentTarget.src = fallbackAvatar; }}
        />
        <div className={styles.socialRow}>
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={styles.socialIcon}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a href="/ADITHYAMERUGU.pdf" className={styles.resumeBtn} download>
          <FaDownload className={styles.downloadIcon} /> Download Resume
        </a>
      </main>
    </>
  );
}
