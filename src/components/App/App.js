import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route } from 'react-router-dom'; 
import Hero from '../Hero/Hero';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import { storeProject } from '../../actions';

class App extends Component {
constructor() {
  super()

  this.projects = [
    {
     image: 'evo-lite-main.jpg',
     company: 'Evo-Lite',
     title: 'CMS, Web Design, Marketing',
     year: '2016',
     active: true
    },
    {
      image: 'evo-lite-main.jpg',
      company: 'Daytrip',
      title: 'React / Redux Event Planner',
      year: '2018',
      active: false
     }
  ]
}
componentDidMount() {
  this.storeProjects();
}

storeProjects = () => {
  this.projects.forEach((project) => {
    const { image, company, title, year, active } = project;

    this.props.storeProject(image, company, title, year, active)
  })
}

  render() {
    return (
      <div className="App">
        <Hero />
        <div className="mainContent">
          <ProjectInfo />
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeProject: (image, company, title, year, active) => dispatch(storeProject(image, company, title, year, active))
});

export default connect(null, mapDispatchToProps)(App);
