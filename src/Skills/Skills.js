import React from "react";
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
import {faHtml5, faJs, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons'
import Title from "../Tilte/Title"
import reduxIcon from '@iconify/icons-simple-icons/redux';

const Skills = () => {
  const skills = [
    {
      title: 'HTML&CSS',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      icon: faHtml5,
      isReduxIcon: false
    },
    {
      title: 'Java Script',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      icon: faJs,
      isReduxIcon: false
    },
    {
      title: 'React',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: faReact,
      isReduxIcon: false
    },
    {
      title: 'Redux',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: reduxIcon,
      isReduxIcon: true


},
  ]
  const skillsEls = skills.map((skill, i) => (
    <Skill key={i}
           descriptionText={skill.descriptionText}
           isReduxIcon={skill.isReduxIcon}
           icon={skill.icon}
           skillTitle={skill.title}
    />
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
