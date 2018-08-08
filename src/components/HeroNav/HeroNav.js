import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeProject, activateProject } from '../../actions';
import './HeroNav.css';

class HeroNav extends Component {
  selectedProject = (event) => {
    const selectedTitle = event.target.closest('div').getElementsByTagName('h6')[0].innerHTML;

    this.props.projects.forEach(project => {
      const {image, company, title, year } = project;

      project.title === selectedTitle ? this.props.activateProject(selectedTitle) : null;
    });
  }

  render() {

    return (
      <section className="heroNav">
        <div className="heroNavLeft"  id={1}  onClick={(event) => this.selectedProject(event)}>
          <p>01.</p>
          <h6>{ this.props.projects[0].title}</h6>
        </div>
        <div className="heroNavCenter"  id={2} onClick={(event) => this.selectedProject(event)}>
          <p>02.</p>
          <h6>React / Redux Event Planner</h6>
        </div>
        <div className="heroNavRight" id={3}  onClick={(event) => this.selectedProject(event)}>
          <p>03.</p>
          <h6>Denver Happy Hour API</h6>
        </div>
      </section>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeProject: (image, company, title, year, active) => dispatch(storeProject(image, company, title, year, active)),
  activateProject: (title) => dispatch(activateProject(title))
});

export const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(HeroNav);
