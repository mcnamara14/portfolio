import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, withRouter } from 'react-router-dom'; 
import Hero from '../Hero/Hero';
import { storeProject } from '../../actions';
import { projects } from '../../projectData/projectData';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

class App extends Component {
componentDidMount() {
  this.storeProjects();
}

storeProjects = () => {
  projects.forEach((project) => {
    const { company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active } = project;

    this.props.storeProject(company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active)
  })
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Hero} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeProject: (company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active) => dispatch(storeProject(company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, projectInfoTitle2, projectInfoBodyP3, projectInfoBodyP4, active))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
