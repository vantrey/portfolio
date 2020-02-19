import React from "react";
import styles from './Projects.module.css'
import Project from "./Project/Project";


const Projects = () => {
  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.container}>

          <h3 className={styles.title}>Мои проекты</h3>

        <div className={styles.projects}>
          <Project descriptionText='Краткое описание проекта'
                 PictureRef='' titleOfProject='Social Network'/>
          <Project descriptionText='Краткое описание проекта'
                   PictureRef='' titleOfProject='Social Network'/>
        </div>
      </div>
    </div>
  )
};
export default Projects;
