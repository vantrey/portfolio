import React from "react";
import styles from './Title.module.css'

const Title = (props) => {
  return (
    <div className={styles.titleWrapper}>
      {props.titleText ?
        <>
          <h2 className={styles.title}>{props.titleText}</h2>
          <div className={styles.line}></div>
        </>
        : <h2 className={styles.compactSize}>{props.children}</h2>
      }
    </div>
  )
}
export default Title;
