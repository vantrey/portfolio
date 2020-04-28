import React from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div>
          <Title titleText={`contacts`}/>
        </div>

        <form className={styles.contactsForm}>
          <input className={styles.contactsInput} placeholder={`Your name`}/>
          <input className={styles.contactsInput} placeholder={`e-mail`}/>
          <textarea className={styles.contactsTextArea} placeholder={`message`}/>
          <Button buttonName={`send message`} buttonLink={``}/>
        </form>
      </div>
    </div>
  )
};
export default Contacts;
