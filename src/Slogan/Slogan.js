import React from "react";
import styles from './Slogan.module.css'
import Title from "../Tilte/Title"
import Button from "../Button/Button"
import Fade from 'react-reveal/Fade';

const Slogan = () => {
  return (

    <div className={styles.slogan}>
      <div className={styles.container}>
        <Title isSmall={false}>I Am Available For Freelancer</Title>
        <Fade bottom>
          <Button
            buttonName={`here me`}
            buttonLink={''}
          />
        </Fade>
      </div>
    </div>
  )
};
export default Slogan;
