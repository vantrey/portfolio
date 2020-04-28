import React from "react";
import styles from './Slogan.module.css'
import Title from "../Tilte/Title"
import Button from "../Button/Button"

const Slogan = () => {
  return (

    <div className={styles.slogan}>
      <div className={styles.container}>
        <Title titleText={`I Am Available For Freelancer`}/>
          <Button
            buttonName={`here me`}
            buttonLink={''}
          />
      </div>
    </div>
  )
};
export default Slogan;