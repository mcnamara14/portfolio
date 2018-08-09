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
          <article className="projectInfoLeft">
            <h4>2012-2017</h4>
            <h3>Web development and all online marketing for Evo-Lite</h3>
            <i class="fas fa-long-arrow-alt-right"></i>
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
