import React from "react";
import styles from './Title.module.css'
import Fade from 'react-reveal/Fade';

const Title = (props) => {
  return (
    <Fade top>
      <div className={styles.titleWrapper}>
        {!props.isSmall ?
          <>
            <h2 className={styles.title}>{props.children}</h2>
            <div className={styles.line}></div>
          </>
          : <h2 className={styles.smallSize}>{props.children}</h2>}
      </div>
    </Fade>
  )
}
export default Title;
