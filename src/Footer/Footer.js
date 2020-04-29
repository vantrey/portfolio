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

const Footer = () => {
  return (

    <footer className={styles.footer}>
      <div className={styles.container}>

        <Title>Ivan Tolkachev</Title>

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
        <span className={styles.copyRight}>© 2020 All Rights Reserved.</span>
      </div>
    </footer>

  )
};
export default Footer;
