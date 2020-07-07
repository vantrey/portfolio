import React from "react";
import styles from './TextField.module.css'


const TextField = ({name, register, errorMessage, fieldType}) => {
  return (
    <>
      {fieldType === 'input' &&
      <input className={styles.formArea} name={name} ref={register} placeholder={name}/>}

      {fieldType === 'textarea' &&
      <textarea className={styles.messageArea} name={name} ref={register} placeholder={name}/>}

      {errorMessage && <span className={styles.errorMessage}>{errorMessage.message}</span>}
    </>
    )
}
export default TextField;
