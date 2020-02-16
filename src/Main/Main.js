import React from "react";
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greetings}>
          <span>Привет!</span>
          <span>Меня зовут Иван Толкачев</span>
          <span>Я Front-end разработчик</span>
        </div>
        <div className={styles.photo}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>

  )
};
export default Main;
