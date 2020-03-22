import React from "react";
import styles from './Title.module.css'

const Title = (props) => {
  return (
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{props.titleText}</h2>
          <div className={styles.line}></div>
        </div>
    )
}
export default Title;
