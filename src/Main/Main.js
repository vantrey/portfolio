import React from "react";
import styles from './Main.module.css'
import photo from '../assets/images/photo.jpg'
import Tilt from "react-tilt/dist/tilt"

const Main = () => {
  return (
    <div id={'main'} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greetings}>
          <span>Hi There</span>
          <div className={styles.greetingsName}>
            <span>I am</span>
            <span>Ivan Tolkachev</span>
          </div>

          <h1>A front-end developer</h1>
        </div>
        <div className={styles.photo}>
          <Tilt options={{
            reverse: false,  // reverse the tilt direction
            max: 30,     // max tilt rotation (degrees)
            perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
            speed: 300,    // Speed of the enter/exit transition
            transition: true,   // Set a transition on enter/exit.
            axis: null,   // What axis should be disabled. Can be X or Y.
            reset: true,    // If the tilt effect has to be reset on exit.
            easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
          }} style={{height: 400, width: 300}}>
            <div className="Tilt-inner">
              <div className={styles.image} style={{backgroundImage: `url(${photo})`}}/>
            </div>
          </Tilt>
        </div>
      </div>
    </div>

  )
};
export default Main;
