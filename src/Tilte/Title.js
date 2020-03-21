import React from "react";
import styles from './Title.module.css'

const Title = () => {
  return (
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Мои скиллы</h2>
          <div className={styles.line}></div>
        </div>
    )
}
export default Title;
