// imports
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

// this component renders the "about" section, providing info about me
export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* section container with an "about" id so when user clicks the "about" button in the nav, it scrolls to the appropriate section */}
      <h2 className={styles.title}>About</h2>
      {/* paragraph about my background */}
      <p className={styles.aboutP}>
        I’m a full-stack developer who enjoys building where creativity meets
        functionality. With a background in both development and design, I
        create responsive, user-focused applications from concept to deployment.
      </p>
      <p className={styles.aboutP}>
        I’ve worked with modern technologies like React, Next.js, Node.js, and
        MongoDB, and have experience delivering real-world solutions through
        freelance and collaborative projects. Whether I’m developing a
        full-stack application or designing a custom website, I focus on
        performance, usability, and clean code.
      </p>
      <p className={styles.aboutP}>
        I’m always learning, exploring new technologies, and looking for
        opportunities to build meaningful digital experiences.
      </p>

      <div className={styles.content}>
        {/* container for images and skill list */}
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
              {/* skill details */}
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
              <h3>Website Developer & UI Design</h3>
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
