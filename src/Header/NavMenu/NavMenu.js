import React from "react";
import styles from './NavMenu.module.css'

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <a href="" className={styles.link}>Home</a>
      <a href="" className={styles.link}>Skills</a>
      <a href="" className={styles.link}>Projects</a>
      <a href="" className={styles.link}>Contacts</a>
    </nav>
  )
};
export default NavMenu;
