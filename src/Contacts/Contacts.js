import React from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div>
          <Title titleText={`контакты`}/>
        </div>

        <form className={styles.contactsForm}>
          <input className={styles.contactsInput} placeholder={`Ваше имя`}/>
          <input className={styles.contactsInput} placeholder={`e-mail`}/>
          <textarea className={styles.contactsTextArea} placeholder={`сообщение`}/>
          <Button buttonName={`отправить`} buttonLink={``}/>
        </form>
      </div>
    </div>
  )
};
export default Contacts;
