import React, {useState} from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"
import Fade from 'react-reveal/Fade';
import {useForm} from "react-hook-form";
import * as yup from "yup"
import TextField from "../TextField/TextField"
import axios from "axios"

const Contacts = () => {
  const sendMessageSchema = yup.object().shape({
    name: yup.string().required('⚠ please, fill up your name'),
    email: yup.string().required('⚠ please, fill up your email')
      .email('⚠ please, fill up a valid email address'),
    message: yup.string().required('⚠ please, enter your message')
  });
  const [isFetching, setIsFetching] = useState(false)
  const {register, handleSubmit, errors, reset} = useForm({mode: 'onBlur', validationSchema: sendMessageSchema});

  const onSubmit = async data => {

    reset()

    try {
      setIsFetching(true)
      await axios.post(
        'https://nodejs-smtp-server.herokuapp.com/sendMessage', {
          data
        })
      setIsFetching(false)

    } catch (e) {
      console.log({...e})
      setIsFetching(false)
    }
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
            <TextField type={`input`} name={'email'} register={register} errorMessage={errors.email}/>
            <TextField type={`textarea`} name={`message`} register={register} errorMessage={errors.message}/>
            <div className={styles.contactsButton}>

              {(isFetching && <div>...sending</div>) ||

              <Button buttonName={`send message`} buttonLink={``}/>}
            </div>

          </form>

        </Fade>
      </div>
    </div>
  )
}
export default Contacts;
