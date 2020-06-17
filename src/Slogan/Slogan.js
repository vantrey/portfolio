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
        <Fade top>
          <Button
            buttonName={`here me`}
            buttonLink={'https://jobs.tut.by/resume/5bef5e71ff07f75e360039ed1f64314c6d5276'}
          />
        </Fade>
      </div>
    </div>
  )
};
export default Slogan;
