import React from "react";
import styles from './Projects.module.css'
import Project from "./Project/Project";


const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Мои проекты</h3>
        </div>
        <div className={styles.projectsItems}>

          {Array.from({length: 2}).map((el, i) => (
            <Project key={i} descriptionText='Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dicta quidem, veritatis.'
                     PictureRef='' titleOfProject='Social Network'/>))}

        </div>
      </div>
    </div>
  )
};
export default Projects;
