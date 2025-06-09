import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaCheckCircle
} from "react-icons/fa";

const SOCIAL = [
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/adithyamerugu", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/Adithya1105", label: "GitHub" },
];

export default function Contact() {
  const { register, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <div className={styles.grid}>
        <div className={styles.info}>
          <p><FaEnvelope className={styles.icon}/> <a href="mailto:adithyamerugu072@gmail.com">adithyamerugu072@gmail.com</a></p>
          <p><FaPhone className={styles.icon}/> <a href="tel:+17853935626">+1 (785) 393-5626</a></p>
          {SOCIAL.map(s => (
            <p key={s.label}>
              {s.icon} <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
            </p>
          ))}
        </div>

        <div className={styles.formContainer}>
          {submitted && (
            <div className={styles.thankyou}>
              <FaCheckCircle className={styles.successIcon} />
              <p>Thank you! Your message has been sent to Adithya.</p>
            </div>
          )}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className={styles.form}
            netlify
            action="/thank-you.html"
            onSubmit={() => setSubmitted(true)}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.field}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                {...register("name", { required: "Name is required" })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <span role="alert" className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <span role="alert" className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="10"
                required
                {...register("message", { required: "Message cannot be empty" })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <span role="alert" className={styles.error}>{errors.message.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
