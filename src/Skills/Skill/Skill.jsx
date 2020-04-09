import React from "react";
import styles from './Skill.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Icon} from '@iconify/react';

const Skill = (props) => {
  return (
    <div className={styles.skillWrapper}>
      <div className={styles.skillIconBg}>
        <div className={styles.skillIcon}>
          {
            (props.isReduxIcon && <Icon icon={props.icon} />) ||
              (!props.isReduxIcon && <FontAwesomeIcon icon={props.icon}/>)
          }
        </div>
      </div>
      <h3>{props.skillTitle}</h3>
      <div className={styles.skillDescription}>
        <span>{props.descriptionText}</span>
      </div>
    </div>
  )
}

export default Skill;

