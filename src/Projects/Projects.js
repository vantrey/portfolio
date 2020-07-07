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
      projectTitle: 'Wisemen game',
      descriptionText: `A card-based learning game. 
                        Project with collaborators. 
                        Use React, Redux, hooks, Typescript, REST API,
                        and other technologies. In process...`,
      projectPicture: wisemenImg,
      projectUrl: 'https://github.com/vantrey/wisemen'
    },
    {
      projectTitle: 'Todo list',
      descriptionText: `Created using React, Redux, and TypeScript. 
                        There is interaction with the server. 
                        Based on class components with the use of the lifecycle methods.`,
      projectPicture: todoImg,
      projectUrl: 'https://github.com/vantrey/todoListWithApi'

    },
    {
      projectTitle: 'Social network',
      descriptionText: `A large educational project of the social network on React. 
                        The project uses both functional and class components. 
                        State management is performed via Redux. 
                        Interaction with the server using the axios library. 
                        The application architecture is divided into three blocks: 
                        UI, BLL, and DAL`,
      projectPicture: socialImg,
      projectUrl: 'https://github.com/vantrey/socialNetwork'
    },
    {
      projectTitle: 'IT Incubator tasks',
      descriptionText: `Training tasks collected in a single project. 
      React, Redux, TypeScript, REST API are used`,
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
