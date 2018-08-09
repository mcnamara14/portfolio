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
     dates: '2012 - 2017',
     projectInfoTitle: 'Web development and all online marketing for Evo-Lite',
     projectInfoTitle1: 'Website Design & Development',
     projectInfoBodyP1: 'When approached by Evo-Lite originally, they had a very simple, static website with very little content. As a growing company they required a site that could expand to meet their needs as they matured. We designed a website that could be updated easily and included the many features they required, including: photo gallery, web chat, landing pages for newsletter leads, product documentation hub, multiple contact forms, and dynamic product pages.',
     projectInfoBodyP2: 'The process was extensive but resulted in the client getting exactly what they needed out of a site.',
     active: true
    },
    {
      image: 'evo-lite-main.jpg',
      company: 'Daytrip',
      title: 'React / Redux Event Planner',
      dates: '2018',
      projectInfoTitle: 'Web development and all online marketing for Evo-Lite',
      projectInfoTitle1: 'Website Design & Development',
      projectInfoBodyP1: 'When approached by Evo-Lite originally, they had a very simple, static website with very little content. As a growing company they required a site that could expand to meet their needs as they matured. We designed a website that could be updated easily and included the many features they required, including: photo gallery, web chat, landing pages for newsletter leads, product documentation hub, multiple contact forms, and dynamic product pages.',
      projectInfoBodyP2: 'The process was extensive but resulted in the client getting exactly what they needed out of a site.',
      active: false
     }
  ]
}
componentDidMount() {
  this.storeProjects();
}

storeProjects = () => {
  this.projects.forEach((project) => {
    const { image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, active } = project;

    this.props.storeProject(image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, active)
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
  storeProject: (image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, active) => dispatch(storeProject(image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, active))
});

export default connect(null, mapDispatchToProps)(App);
