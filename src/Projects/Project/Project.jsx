import React from "react";
import styles from './Project.module.css'
import Button from "../../Button/Button"

const Project = (props) => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.projectPictureWrapper}>
        <div className={styles.projectPicture}
             style={{backgroundImage: `url(${props.projectPicture})`}}
        >
        </div>
        <div className={styles.button}>
          <Button
            buttonName={`view`}
            buttonLink={props.projectUrl}
          />
        </div>
      </div>
      <div className={styles.projectDescriptionWrapper}>
        <h3 className={styles.projectTitle}>
          {props.projectTitle}
        </h3>
        <span className={styles.projectDescription}>
          {props.descriptionText}</span>
      </div>
    </div>
  )
}

export default Project;