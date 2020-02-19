import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (

    <footer className={styles.footer}>
      <div className={styles.container}>

        <span>Иван Толкачев</span>

        <div className={styles.footerIcons}>
          <img className={styles.footerIcon}/>
          <img className={styles.footerIcon}/>
          <img className={styles.footerIcon}/>
          <img className={styles.footerIcon}/>
        </div>

        <span>Все права защищены</span>

      </div>
    </footer>

  )
};
export default Footer;
