import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeProject, activateProject } from '../../actions';
import './HeroNav.css';

class HeroNav extends Component {
  toggleProject = (event) => {
    const selectedTitle = event.target.closest('div').getElementsByTagName('h6')[0].innerHTML;
    const selectedDiv = event.target.closest('div');

    this.props.projects.forEach(project => {
      const {image, company, title, year } = project;

      project.title === selectedTitle ? this.props.activateProject(selectedTitle) : null;
    });

    this.toggleActiveClass(selectedDiv);
  }

  toggleActiveClass = (selected) => {
    const heroNavs = document.querySelectorAll('.heroNavLink');

    heroNavs.forEach(nav => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active')
      }
    })

    selected.classList.add('active')
  }

  render() {

    return (
      <section className="heroNav">
        <div className="heroNavLeft heroNavLink active" onClick={(event) => this.toggleProject(event)}>
          <p>01.</p>
          <h6>{ this.props.projects[0].title}</h6>
        </div>
        <div className="heroNavCenter heroNavLink" onClick={(event) => this.toggleProject(event)}>
          <p>02.</p>
          <h6>Happy Hour Locator and API</h6>
        </div>
        <div className="heroNavRight heroNavLink" onClick={(event) => this.toggleProject(event)}>
          <p>03.</p>
          <h6>React / Redux Day or Night Planner</h6>
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
