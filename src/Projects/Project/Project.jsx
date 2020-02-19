import React from "react";
import styles from './Project.module.css'

const Project = (props) => {
  return(
    <div className={styles.projectWrapper}>
      <div className={styles.projectPicture}>
        <button className={styles.projectButton}>Смотреть</button>
        <img src={props.PictureRef}/>
      </div>

      <div className={styles.projectDescriptionWrapper}>
        <span className={styles.projectTitle}>
          {props.titleOfProject}</span>
        <span className={styles.projectDescription}>
          {props.descriptionText}</span>
      </div>
    </div>
  )
}

export default Project;