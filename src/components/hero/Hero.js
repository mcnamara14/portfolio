import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Hero.css';
import Nav from '../Nav/Nav';
import HeroNav from '../HeroNav/HeroNav';
import evoliteImage from './images/evo-lite-main.jpg';
import happyHourImage from './images/happy-hour-hero-main.jpg'
import daytripImage from './images/daytrip-main.jpg';
import HeroInfo from '../HeroInfo/HeroInfo';

class Hero extends Component {
  render() {
    let image;
    const { projects } = this.props;

    if (projects.length) {
      const activeProject = projects.find(project => project.active === true);
      const index = '0' + (projects.indexOf(activeProject) + 1);
      const { company, title, dates } = activeProject;
      console.log(company)
      switch(company) {
        case 'Evo-Lite':
          image = evoliteImage;
          break;
        case 'Happy Hour Hero':
          image = happyHourImage;
          break;
        case 'Daytrip':
          image = daytripImage;
          break;
        default:
          null
      }

      const backgroundImage = {backgroundImage: "url(" + image + ")"};

    return (
      <section className="hero" style={ backgroundImage } >
        <Nav />
        <HeroInfo company={company} title={title} dates={dates} index={index}/>
        <HeroNav />
      </section>
    );
  } else {
    return null;
  }
}
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(mapStateToProps)(Hero);
