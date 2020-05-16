import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from 'react-particles-js'
import {particlesOptions} from "./utils/particlesOptions"


function App() {
  return (
    <div className="App">
      <Particles className={`particles`} params={particlesOptions}/>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Slogan/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
