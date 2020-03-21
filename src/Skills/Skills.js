import React from "react";
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
import {faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons'



const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>

          <h2 className={styles.title}>Мои скиллы</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.skillsItems}>
          {Array.from({length: 3}).map((el, i) => (
            <Skill key={i} descriptionText='Подробное описание навыка'
                   iconRef={faReact} titleOfSkill='React'/>
          ))}
        </div>
      </div>
    </div>
  )
};
export default Skills;
