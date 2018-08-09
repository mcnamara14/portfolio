import React, { Component } from 'react';
import './HeroInfo.css';

class HeroInfo extends Component {
  render() {
    let activeProject;
    const { company, title, dates } = this.props;

   
    let num = '01';
    let outOf = '03';

    return (
      <section className="heroInfo">
        <div className="heroInfoLeft">
          <p>{dates}</p>
        </div>
        <div className="heroInfoCenter">
          <h3>{company}</h3>
          <h4>{title}</h4>
        </div>
        <div className="heroInfoRight">
          <h5>{ num } / <span>{ outOf}</span></h5>
        </div>
      </section>
    );
  } 
}

export default HeroInfo;
