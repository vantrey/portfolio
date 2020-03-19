import React from "react";
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greetings}>
          <span>Привет!</span>
          <span>
            Я <span>Иван Толкачев</span>
          </span>
          <h1>Я front-end разработчик</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image}/>
        </div>
      </div>
    </div>

  )
};
export default Main;
