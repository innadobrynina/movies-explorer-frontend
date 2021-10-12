import React from 'react';
import './Main.css';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import AboutProject from "../AboutProject/AboutProject";
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main(props) {
  return (
    <>
    <Hero loggedIn={props.loggedIn} />
      <main className='main-content'>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
    </main>
    <Footer />
    </>
  );
}

export default Main;
