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
        With a passion for learning new things, I pursued and graduated from UCF
        Full Stack Coding Bootcamp. The experience was challenging yet
        incredibly rewarding, equipping me with the skills and adoration to
        embark on a career in software development.{" "}
      </p>
      <p className={styles.aboutP}>
        In addition to my passion for coding, I'm a dedicated dog mom, spending
        quality time with my furry companions. I also enjoy staying active
        through volleyball, kickball and disc golf, finding balance and joy in
        both my professional and personal life.
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
