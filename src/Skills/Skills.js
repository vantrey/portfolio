import React from "react";
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
import {faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import Title from "../Tilte/Title"
import Fade from 'react-reveal/Fade';

const Skills = () => {
  const skills = [
    {
      title: 'HTML&CSS',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      icon: faHtml5,
      isIconfy: false
    },
    {
      title: 'JavaScript',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      icon: faJs,
      isIconfy: false
    },
    {
      title: 'React',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: faReact,
      isIconfy: false
    },
    {
      title: 'Redux',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: reduxIcon,
      isIconfy: true
    },
    {
      title: 'TypeScript',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      icon: typescriptIcon,
      isIconfy: true
    },
  ]
  const skillsEls = skills.map(skill  => (
    <Skill key={skill.title}
           descriptionText={skill.descriptionText}
           isIconfy={skill.isIconfy}
           icon={skill.icon}
           skillTitle={skill.title}
    />
  ))
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.container}>
        <Title isSmall={false}>my skills</Title>
        <Fade top>
          <div className={styles.skillsItems}>
            {skillsEls}
          </div>
        </Fade>
      </div>
    </div>
  )
};
export default Skills;
