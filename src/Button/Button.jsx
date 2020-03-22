import React from "react"
import styles from './Button.module.css'

const Button = (props) => {
  const onButtonClick = () => {
    document.location.href = props.buttonLink
  }
  return (
    <div>
      <div className={styles.button}>
      <span
        className={styles.buttonName}
        onClick={onButtonClick}
      >
        {props.buttonName}
      </span>
      </div>
    </div>

  )
}
export default Button
