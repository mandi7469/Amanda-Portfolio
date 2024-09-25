// imports
import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

// this compontent renders the "contact" section, providing contact information
export const Contact = () => {
  // variable declration for the date used in the footer
  let date = new Date();
  let year = date.getFullYear();

  const [showButton, setShowButton] = useState(false);
  // this effect runs once when the component mounts and updates the "showButton" state based on the scroll position

  useEffect(() => {
    // this function handles the scroll event
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

  // this function handles the click event on the button and scrolls it to the top of the page
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <section id="contact" className={styles.container}>
        {/* section container with a "contact" id so when user clicks the "contact" button in the nav, it scrolls to the appropriate section */}
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Look forward to connecting!</p>
          <a className={styles.topBtn} onClick={handleClick}>
            Top <i className="bi bi-arrow-up-circle ps-1"></i>
          </a>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/amanda-changa/">
              <i
                className="bi bi-linkedin pe-2"
                style={{ color: "#c0e0de" }}
              ></i>
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/mandi7469">
              <i className="bi bi-github pe-2" style={{ color: "#c0e0de" }}></i>
              GitHub
            </a>
          </li>
          <li className={styles.link}>
            <a href="mailto:mandi7469@aol.com">
              <i
                className="bi bi-envelope pe-2"
                style={{ color: "#c0e0de" }}
              ></i>
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
