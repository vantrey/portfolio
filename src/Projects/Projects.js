import React from "react";
import styles from './Projects.module.css'
import Project from "./Project/Project";
import Title from "../Tilte/Title"


const Projects = () => {
  const projects = [
    {
      projectTitle: 'Социальноя сеть',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      projectPicture: 'https://makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg',
      projectUrl:''
    },
    {
      projectTitle: 'Todo list',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      projectPicture: 'https://makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg',
      projectUrl:''

    },
    {
      projectTitle: 'Счетчик',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      projectPicture: 'https://makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg',
      projectUrl:''

    },
    {
      projectTitle: 'Учебный проект',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      projectPicture: 'https://makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg',
      projectUrl:'https://vantrey.github.io/ignat-tasks'

    },
  ]
  const projectsEls = projects.map((project, i) => (
    <Project key={i}
           descriptionText={project.descriptionText}
             projectTitle={project.projectTitle}
             projectUrl={project.projectUrl}
             projectPicture={project.projectPicture}
    />
  ))
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <Title titleText={'проекты'}/>
        <div className={styles.projectsItems}>
          {projectsEls}
        </div>
      </div>
    </div>
  )
};
export default Projects;
