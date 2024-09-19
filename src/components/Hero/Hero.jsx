import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Type from "./Type"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Amanda</h1>
        <div className={styles.description}>
                <Type />
              </div>
        <a href="mailto:mandi7469@aol.com" className={styles.contactBtn}>
          Email Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero-image.png")}
        alt="Web illustrations by Storyset"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
