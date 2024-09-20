import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.aboutP}>
        In addition to my passion for coding, I love to spend my free time
        playing volleyball, kickball, and disc golf.{" "}
      </p>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Web illustrations by Storyset"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {" "}
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor-icon by Icons8"
            />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>
                Experience in building responsive and optimized applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server-icon by Icons8"
            />
            <div className={styles.aboutItemText}>
              <h3>Back-End Developer</h3>
              <p>
                Experience in building high-performance back-end systems and
                APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/designIcon.png")}
              alt="web-design-icon by Icons8"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Deep understanding of user experience principles and visual
                design best practices
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
