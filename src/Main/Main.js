import React from "react";
import styles from './Main.module.css'
import photo from '../assets/images/photo.jpg'

const Main = () => {
  return (
    <div id={'main'} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greetings}>
          <span>Hi There</span>
          <div className={styles.greetingsName}>
            <span>I am</span>
            <span>Ivan Tolkachev</span>
          </div>

          <h1>A front-end developer</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image} style={{backgroundImage: `url(${photo})`}}/>
        </div>
      </div>
    </div>

  )
};
export default Main;
