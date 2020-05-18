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
            <a href={`https://www.facebook.com/profile.php?id=100018834223000`}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faFacebookF}/>
            </a>
            <a href={`https://vk.com/id29951956`}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faVk}/>
            </a>
            <a href={`https://t.me/ivan_tolkachev`}>
              <FontAwesomeIcon className={styles.socialIcon} icon={faTelegramPlane}/>
            </a>
            <a href={`https://www.linkedin.com/in/ivan-tolkachev-62642a95/`}>
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
