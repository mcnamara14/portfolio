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
     projectInfoTitle2: 'Online Marketing',
     projectInfoBodyP3: 'The clients business was in an industry with a lot of competition so online marketing / search engine optimization (SEO) efforts were extremely important. We did considerable keyword research to understand what people were searching for in order to find the clients type of company. We inserted these keywords throughout the website text, titles, page descriptions, as well as in blogs we helped the company create.',
     projectInfoBodyP4: 'This work along with other SEO techniques have brought the website to the very top of Google for the vast majority of keywords related to the products sold by the company. This has increased traffic by over times the original traffic of the old website and the website is now, by far, the biggest lead generator for Evo-Lite.',
     active: true
    },
    {
      image: 'evo-lite-main.jpg',
      company: 'Happy Hour Hero',
      title: 'Happy Hour Locator and API',
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
    const { image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active } = project;

    this.props.storeProject(image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active)
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
  storeProject: (image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active) => dispatch(storeProject(image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active))
});

export default connect(null, mapDispatchToProps)(App);
