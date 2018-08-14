import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Resume.css';
import Nav from '../Nav/Nav';
import resumeHeaderImg from './images/resume-header.jpg';

class Resume extends Component {
  componentDidMount() {
    console.log('hello')
  }
  render() {

    const backgroundImage = {backgroundImage: "url(" + resumeHeaderImg + ")"};

    return (
      <div style={ backgroundImage } className="resume">
        <Nav />
        <section className="resumeHeader">
          <h1>Tyler McNamara</h1>
          <h2>Front-End Developer</h2>
        </section>
        <section className="resumeContainer">
          <div className="resumeLeft">
            <h3>Profile</h3>
            <p>Results-driven, entrepreneurial, and innovative software developer with over seven years of web development experience and online marketing management.</p><p>A lifelong love of problem solving, design and technology has led me to a career in my passion, programming.</p>
          </div>
          <div className="resumeRight">
            <h3>Projects</h3>
            <h4>Daytrip</h4>
            <a href="https://github.com/mcnamara14/daytrip" target="_blank">Daytrip on GitHub</a>
            <h5>Before and After Event Planner</h5>
            <p>Allows users to sign in/out and select a city in their chosen state. After selecting restaurant & bar filters the user is presented with three plans that include the top rated restaurant before the event and a bar after that match the filters chosen. The selected plan can be seen on login.</p>
            <p><strong><em>React / Redux / Firebase / Multiple APIs</em></strong></p>
            <h4>Evo-Lite</h4>
            <a href="http://www.evo-lite.com" target="_blank">www.evo-lite.com</a>
            <h5>WordPress Website, SEO, Branding, Print Ads, Marketing</h5>
            <p>Developed a custom robust CMS site to match the companies needs. Created the brand, designed all online & print advertisements, & led online marketing efforts to significantly increase traffic.</p>
            <p><strong><em>WordPress / Adobe Suite / AutoCAD</em></strong></p>
          </div>
        </section>

      </div>
    );
  }
}

export default Resume;
