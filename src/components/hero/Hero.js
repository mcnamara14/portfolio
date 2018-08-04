import React, { Component } from 'react';
import './Hero.css';
import Nav from '../Nav/Nav';
import HeroNav from '../HeroNav/HeroNav';
import image from './images/evo-lite-main.jpg';
import HeroInfo from '../HeroInfo/HeroInfo';

class Hero extends Component {
  render() {
    const backgroundImage = {backgroundImage: "url(" + image + ")"};

    return (
      <section className="hero" style={ backgroundImage } >
        <Nav />
        <HeroInfo />
        <HeroNav />
      </section>
    );
  }
}

export default Hero;
