import React from "react";
import styles from './Skill.module.css'

const Skill = (props) => {
  return(
    <div className={styles.skillWrapper}>
      <div className={styles.skillIcon}>
      <img src={props.iconRef}/>
      </div>
      <h3>{props.titleOfSkill}</h3>
      <div className={styles.skillDescription}>
        <span>{props.descriptionText}</span>
      </div>
    </div>
  )
}

export default Skill;

