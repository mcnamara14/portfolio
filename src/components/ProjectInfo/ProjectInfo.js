import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectInfo.css';
import evoLiteSide from './images/evo-lite-side.jpg';

class ProjectInfo extends Component {
  render() {
    let sideImg;
    const { projects } = this.props
    const activeProject = projects.find(project => project.active === true);

    if (activeProject) {
      const { company } = activeProject;
      
      switch (company) {
        case 'Evo-Lite':
          sideImg = evoLiteSide
          break;
        default:
          null
          break;
      }
  
      return (
        <section className="projectInfo">
          <article className="projectSide">
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
