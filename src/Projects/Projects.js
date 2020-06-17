import React from "react";
import styles from './Projects.module.css'
import Project from "./Project/Project";
import Title from "../Tilte/Title"
import incubatorImg from "../assets/images/it-incubator-img.jpg"
import wisemenImg from "../assets/images/wisemen.png"
import socialImg from "../assets/images/social_media.jpg"
import todoImg from "../assets/images/to-do-list.png"
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const projects = [
    {
      projectTitle: 'Social network',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      projectPicture: socialImg,
      projectUrl: 'https://github.com/vantrey/socialNetwork'
    },
    {
      projectTitle: 'Todo list',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit. ',
      projectPicture: todoImg,
      projectUrl: 'https://github.com/vantrey/todoListWithApi'

    },
    {
      projectTitle: 'Wisemen game',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      projectPicture: wisemenImg,
      projectUrl: ''

    },
    {
      projectTitle: 'IT Incubator tasks',
      descriptionText: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Dicta quidem, veritatis.' +
        'consectetur adipisicing elit.',
      projectPicture: incubatorImg,
      projectUrl: 'https://github.com/vantrey/homeWorkTasks'

    },
  ]
  const projectsEls = projects.map(project => (
    <Project key={project.projectTitle}
             descriptionText={project.descriptionText}
             projectTitle={project.projectTitle}
             projectUrl={project.projectUrl}
             projectPicture={project.projectPicture}
    />
  ))
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.container}>
        <Title isSmall={false}>my projects</Title>
        <Fade top>
          <div className={styles.projectsItems}>
            {projectsEls}
          </div>
        </Fade>
      </div>
    </div>
  )
};
export default Projects;
