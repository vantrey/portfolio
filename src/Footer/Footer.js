import React from "react";
import styles from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faLinkedinIn,
  faTelegramPlane,
  faVk
} from "@fortawesome/free-brands-svg-icons"
import Title from "../Tilte/Title"
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Title isSmall={true}>Ivan Tolkachev</Title>
        <Fade top>
          <nav className={styles.socialBlock}>
            <a href={``}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faFacebookF}/>
            </a>
            <a href={``}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faVk}/>
            </a>
            <a href={``}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faTelegramPlane}/>
            </a>
            <a href={``}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faLinkedinIn}/>
            </a>
          </nav>
        </Fade>
        <span className={styles.copyRight}>© 2020 All Rights Reserved.</span>
      </div>
    </footer>

  )
};
export default Footer;
