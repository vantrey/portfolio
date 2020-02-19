import React from "react";
import styles from './NavMenu.module.css'

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <a href="" className={styles.link}>Главная</a>
      <a href="" className={styles.link}>Скиллы</a>
      <a href="" className={styles.link}>Проекты</a>
      <a href="" className={styles.link}>Контакты</a>
    </nav>
  )
};
export default NavMenu;
