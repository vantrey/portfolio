import React from "react";
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>

        <span>Контакты</span>

        <form className={styles.contactsForm}>
          <input className={styles.contactsInput}></input>
          <input className={styles.contactsInput}></input>
          <textarea className={styles.contactsTextArea}></textarea>
        </form>

        <button className={styles.contactsButton}>
          Отправить
        </button>

      </div>

    </div>
  )
};
export default Contacts;
