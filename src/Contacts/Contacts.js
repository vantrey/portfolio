import React from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div>
          <Title titleText={`contact`}/>
        </div>

        <form className={styles.contactsForm}>
          <input className={styles.formArea} placeholder={`name`}/>
          <input className={styles.formArea} placeholder={`e-mail`}/>
          <textarea className={styles.messageArea} placeholder={`you message`}/>
          <Button buttonName={`send message`} buttonLink={``}/>
        </form>
      </div>
    </div>
  )
};
export default Contacts;
