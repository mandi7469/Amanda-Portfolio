// imports
import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// this component renders a card displaying information about a project - using the data from /data/projects.json
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          <i className="bi bi-code-slash pe-1"></i>
          Demo
        </a>
        <a href={source} className={styles.link}>
          <i className="bi bi-github pe-1"></i>
          GitHub
        </a>
      </div>
    </div>
  );
};
