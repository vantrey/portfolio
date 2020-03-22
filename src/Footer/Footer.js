import React from "react";
import styles from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
   faLinkedinIn,
  faTelegramPlane,
  faVk
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (

    <footer className={styles.footer}>
      <div className={styles.container}>

        <span>Иван Толкачев</span>

        <nav className={styles.footerIcons}>
          <a href={``}>
            <FontAwesomeIcon className={styles.footerIcon} icon={faFacebookF}/>
          </a>
          <a href={``}>
            <FontAwesomeIcon className={styles.footerIcon} icon={faVk}/>
          </a>
          <a href={``}>
            <FontAwesomeIcon className={styles.footerIcon} icon={faTelegramPlane}/>
          </a>
          <a href={``}>
            <FontAwesomeIcon className={styles.footerIcon} icon={faLinkedinIn}/>
          </a>
        </nav>
        <span>Все права защищены</span>
      </div>
    </footer>

  )
};
export default Footer;
