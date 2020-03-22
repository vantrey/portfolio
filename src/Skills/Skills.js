import React from "react";
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
import {faNodeJs, faReact, faReacteurope} from '@fortawesome/free-brands-svg-icons'
import Title from "../Tilte/Title"
import {faCalculator, faCocktail, faCoffee} from "@fortawesome/free-solid-svg-icons"

const Skills = () => {
  const skills = [
    {
      title: 'HTML&CSS',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      icon: faReact,
    },
    {
      title: 'Java Script',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      icon: faNodeJs
    },
    {
      title: 'React',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: faReact
    },
    {
      title: 'Redux',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: faCoffee
    },
  ]
  const skillsEls = skills.map((skill, i) => (
    <Skill key={i}
           descriptionText={skill.descriptionText}
           icon={skill.icon} skillTitle={skill.title}/>
  ))
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <Title titleText={'мои навыки'}/>
        <div className={styles.skillsItems}>
          {skillsEls}
        </div>
      </div>
    </div>
  )
};
export default Skills;
