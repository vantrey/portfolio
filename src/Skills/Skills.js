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
      descriptionText: `flexbox, css grid, media queries`,
      icon: faHtml5,
      isIconfy: false
    },
    {
      title: 'JavaScript',
      descriptionText: `es5 / es6, arrow functions, array methods, spread, rest, closures,
                        destructuring, promises, pure function, this, prototypes, 
                        deep copy objects, local storage`,
      icon: faJs,
      isIconfy: false
    },
    {
      title: 'React',
      descriptionText: `class and function components,
                        life cycle methods, HOCs, HOOKs, local state, AJAX, ref`,
      icon: faReact,
      isIconfy: false
    },
    {
      title: 'Redux',
      descriptionText: `store methods, reducer, combineReducers, applyMiddleware, redux-thunk`,
      icon: reduxIcon,
      isIconfy: true
    },
    {
      title: 'TypeScript',
      descriptionText: `typing JS objects and functions, react components, redux methods etc.  `,
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
