import React from "react";
import styles from './Projects.module.css'
import Project from "./Project/Project";
import Title from "../Tilte/Title"
import incubatorImg from "../assets/images/it-incubator-img.jpg"
import counterImg from "../assets/images/counter-img.png"


const Projects = () => {
  const projects = [
    {
      projectTitle: 'Social network',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      projectPicture: 'https://makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg',
      projectUrl: ''
    },
    {
      projectTitle: 'Todo list',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      projectPicture: 'https://pluspng.com/img-png/to-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png',
      projectUrl: 'https://vantrey.github.io/ignat-tasks/#/Tuesday'

    },
    {
      projectTitle: 'Counter',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      projectPicture: counterImg,
      projectUrl: ''

    },
    {
      projectTitle: 'IT Incubator tasks',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      projectPicture: incubatorImg,
      projectUrl: 'https://vantrey.github.io/ignat-tasks'

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
        <Title titleText={'my projects'}/>
        <div className={styles.projectsItems}>
          {projectsEls}
        </div>
      </div>
    </div>
  )
};
export default Projects;
