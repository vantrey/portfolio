import React from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"
import Fade from 'react-reveal/Fade';

const Contacts = () => {
  return (
    <div id={'contacts'} className={styles.contacts}>
      <div className={styles.container}>
        <div>
          <Title isSmall={false}>contact</Title>
        </div>
        <Fade top>
          <form className={styles.contactsForm}>
            <input className={styles.formArea} placeholder={`name`}/>
            <input className={styles.formArea} placeholder={`e-mail`}/>
            <textarea className={styles.messageArea} placeholder={`you message`}/>
            <Button buttonName={`send message`} buttonLink={``}/>
          </form>
        </Fade>
      </div>
    </div>
  )
};
export default Contacts;
