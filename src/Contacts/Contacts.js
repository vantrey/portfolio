import React, {useEffect, useState} from "react";
import styles from './Contacts.module.css'
import Button from "../Button/Button"
import Title from "../Tilte/Title"
import Fade from 'react-reveal/Fade';
import {useForm} from "react-hook-form";
import * as yup from "yup"
import TextField from "../TextField/TextField"
import axios from "axios"
import Preloader from "../Preloader/Preloader"

const Contacts = () => {
  const sendMessageSchema = yup.object().shape({
    name: yup.string().required('⚠ please, fill up your name'),
    email: yup.string().required('⚠ please, fill up your email')
      .email('⚠ please, fill up a valid email address'),
    message: yup.string().required('⚠ please, enter your message')
  });
  const [isFetching, setIsFetching] = useState(false)
  const {register, handleSubmit, errors, reset} = useForm({mode: 'onBlur', validationSchema: sendMessageSchema});
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)
    }
  }, [isSuccess])

  const onSubmit = async data => {
    reset()
    try {
      setIsFetching(true)
      await axios.post(
        'https://nodejs-smtp-server.herokuapp.com/sendMessage', {
          data
        })
      setIsFetching(false)
      setIsSuccess(true)
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

            <TextField fieldType={`input`} name={`name`} register={register} errorMessage={errors.name}/>
            <TextField fieldType={`input`} name={'email'} register={register} errorMessage={errors.email}/>
            <TextField fieldType={`textarea`} name={`message`} register={register} errorMessage={errors.message}/>

            <div className={styles.contactsButton}>

              {(isFetching &&
                <Preloader/>) ||

              (isSuccess &&
                <Fade top>
                <div className={styles.success}>SUCCESS</div>
              </Fade>) ||

              <Button buttonName={`send message`} buttonLink={``}/>}
            </div>

          </form>
        </Fade>
      </div>
    </div>
  )
}
export default Contacts;
