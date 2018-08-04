import React, { Component } from 'react';
import './HeroInfo.css';

class HeroInfo extends Component {
  render() {
    let num = '01';
    let outOf = '05';

    return (
      <section className="heroInfo">
        <div className="heroInfoLeft">
          <p>2016</p>
        </div>
        <div className="heroInfoCenter">
          <h3>Evo-Lite</h3>
          <h4>CMS Website, SEO, Marketing</h4>
        </div>
        <div className="heroInfoRight">
          <h5>{ num } / <span>{ outOf}</span></h5>
        </div>
      </section>
    );
  }
}

export default HeroInfo;
