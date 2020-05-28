import React from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"
import Fade from 'react-reveal/Fade';
import {useForm} from "react-hook-form";
import * as yup from "yup"
import TextField from "../TextField/TextField"

const Contacts = () => {
  const sendMessageSchema = yup.object().shape({
    name: yup.string().required('⚠ please, fill up your name'),
    ['e-mail']: yup.string().required('⚠ please, fill up your e-mail')
      .email('⚠ please, fill up a valid e-mail address'),
    message: yup.string().required('⚠ please, enter your message')
  })

  const {register, handleSubmit, errors} = useForm({mode: 'onBlur', validationSchema: sendMessageSchema});
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div id={'contacts'} className={styles.contacts}>
      <div className={styles.container}>
        <div>
          <Title isSmall={false}>contact</Title>
        </div>
        <Fade top>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.contactsForm}>
            <TextField type={`input`} name={`name`} register={register} errorMessage={errors.name}/>
            <TextField type={`input`} name={`e-mail`} register={register} errorMessage={errors['e-mail']}/>
            <TextField type={`textarea`} name={`message`} register={register} errorMessage={errors.message}/>
            <div className={styles.contactsButton}><Button buttonName={`send message`} buttonLink={``}/></div>
          </form>
        </Fade>
      </div>
    </div>
  )
}
export default Contacts;
