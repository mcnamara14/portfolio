import React, { Component } from 'react';
import './Hero.css';
import Nav from '../Nav/Nav';
import image from './images/evo-lite-main.jpg';

class Hero extends Component {
  render() {
    const backgroundImage = {backgroundImage: "url(" + image + ")"};

    return (
      <section className="hero" style={ backgroundImage } >
        <Nav />
      </section>
    );
  }
}

export default Hero;
