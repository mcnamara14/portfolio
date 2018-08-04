import React, { Component } from 'react';
import './HeroNav.css';

class HeroNav extends Component {
  render() {
    return (
      <section className="heroNav">
        <div className="heroNavLeft">
        <p>01.</p>
        <p>CMS Website, SEO, Marketing</p>
        </div>
        <div className="heroNavCenter">
        <p>02.</p>
        <p>React / Redux Event Planner</p>
        </div>
        <div className="heroNavRight">
        <p>03.</p>
        <p>Denver Happy Hour API</p>
        </div>
      </section>
    );
  }
}

export default HeroNav;
