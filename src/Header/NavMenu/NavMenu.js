import React from "react";
import styles from './NavMenu.module.css'
import {Link} from "react-scroll";

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <Link to="main" activeClass={styles.active} className={styles.link} spy={true} smooth={true} offset={-70}
            duration={1000}>
        Home
      </Link>
      <Link to="skills" activeClass={styles.active} className={styles.link} spy={true} smooth={true} offset={-70}
            duration={1000}>
        Skills
      </Link>
      <Link to="projects" activeClass={styles.active} className={styles.link} spy={true} smooth={true} offset={-70}
            duration={1000}>
        Projects
      </Link>
      <Link to="contacts" activeClass={styles.active} className={styles.link} spy={true} smooth={true} offset={-70}
            duration={1000}>
        Contacts
      </Link>
    </nav>
  )
};
export default NavMenu;
