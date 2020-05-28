import React from "react"
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.button}>
      <a href={props.buttonLink}>
        <button>
        <span className={styles.buttonName}>
          {props.buttonName}
        </span>
        </button>
      </a>
    </div>
  )
}
export default Button
