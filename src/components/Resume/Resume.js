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
            <h3>Technical Skills</h3>
            <ul>
              <li>JavaScript / JQuery</li>
              <li>React / Redux / Router</li>
              <li>Git / GitHub</li>
              <li>Testing (Enzyme, Mocha, Chai, Jest)</li>
              <li>PostgreSQL / Express / Node.js</li>
              <li>HTML5</li>
              <li>CSS3 / SASS</li>
              <li>CMS Development</li>
              <li>Adobe Suite</li>
              <li>Branding</li>
            </ul>
            <h3>Awards</h3>
            <p>Two-time winner of the Turing Front-End Code Fair</p>
            <p>Two-time Turing demo comp finalist</p>
            <h3>Education</h3>
            <h4>Turing School of Software & Design</h4>
            <h5>Graduated 2018</h5>
            <p>1,500+ hours</p><p>Front-End Engineering Certificate</p>
            <h4>University of Colorado - Boulder</h4>
            <h5>Graduated 2017</h5>
            <p>Bachelors in Marketing</p><p>Certificate in Business Management</p>
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
            <h3>Experience</h3>
            <h4>Evo-Lite <span>/ 2012 - 2017</span></h4>
            <h5>Digital Marketing Manager</h5>
            <p>Developed the website for easy maintainability and scalability.</p><p>Lead all digital marketing initiatives including SEO, social media, content & email marketing along with campaign landing page development, branding & product documentation design. </p>
            <h4>RiNo Design Studio <span>/ 2010 - 2017</span></h4>
            <h5>Lead Developer</h5>
            <p>Developed the website for easy maintainability and scalability.</p><p>Lead all digital marketing initiatives including SEO, social media, content & email marketing along with campaign landing page development, branding & product documentation design. </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Resume;
