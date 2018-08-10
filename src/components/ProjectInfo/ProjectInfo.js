import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectInfo.css';
import evoLiteSide from './images/evo-lite-side.jpg';
import happyHeroSide from './images/happy-hour-hero-side.jpg';

class ProjectInfo extends Component {
  render() {
    let sideImg;
    const { projects } = this.props
    const activeProject = projects.find(project => project.active === true);

    if (activeProject) {
      const { 
        company, 
        dates, 
        projectInfoTitle, 
        projectInfoTitle1, 
        projectInfoBodyP1, 
        projectInfoBodyP2,
        projectInfoTitle2, 
        projectInfoBodyP3, 
        projectInfoBodyP4 
      } = activeProject;

      switch (company) {
        case 'Evo-Lite':
          sideImg = evoLiteSide
          break;
        case 'Happy Hour Hero':
          sideImg = happyHeroSide
          break;
        default:
          null
          break;
      }
  
      return (
        <section className="projectInfo">
          <article className="projectInfoLeft">
            <h5>{dates}</h5>
            <h3>{projectInfoTitle}</h3>
            <i class="fas fa-long-arrow-alt-right"></i>
            <h4>{projectInfoTitle1}</h4>
            <p>{projectInfoBodyP1}</p>
            <p>{projectInfoBodyP2}</p>
            <h4>{projectInfoTitle2}</h4>
            <p>{projectInfoBodyP3}</p>
            <p>{projectInfoBodyP4}</p>
          </article>
          <article className="projectInfoRight">
            <img src={sideImg} />
          </article>
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

export default connect(mapStateToProps)(ProjectInfo);
