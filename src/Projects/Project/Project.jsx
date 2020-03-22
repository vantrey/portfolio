import React from "react";
import styles from './Project.module.css'
import Button from "../../Button/Button"

const Project = (props) => {
  return(
    <div className={styles.projectWrapper}>
      <div className={styles.projectPicture}>
          <img src={props.projectPicture}/>
      </div>
      <div className={styles.projectDescriptionWrapper}>
        <h3 className={styles.projectTitle}>
          <Button
            buttonName={props.projectTitle}
            buttonLink={props.projectUrl}
          />
        </h3>
        <span className={styles.projectDescription}>
          {props.descriptionText}</span>
      </div>
    </div>
  )
}

export default Project;