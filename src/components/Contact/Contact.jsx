import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  let date = new Date();
  let year = date.getFullYear();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <section id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Look forward to connecting!</p>
          <a className={styles.topBtn} onClick={handleClick}>
            Top <i class="bi bi-arrow-up-circle ps-1"></i>
          </a>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/amanda-changa/">
              <i class="bi bi-linkedin pe-2" style={{ color: "#c0e0de" }}></i>
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/mandi7469">
              <i class="bi bi-github pe-2" style={{ color: "#c0e0de" }}></i>
              GitHub
            </a>
          </li>
          <li className={styles.link}>
            <a href="mailto:mandi7469@aol.com">
              <i class="bi bi-envelope pe-2" style={{ color: "#c0e0de" }}></i>
              Email
            </a>
          </li>
        </ul>
      </section>
      <footer className={styles.footerContainer}>
        <div className={styles.footerText}>
          <h3>© {year} Developed and Designed by Amanda Changa</h3>
        </div>
      </footer>
    </>
  );
};
