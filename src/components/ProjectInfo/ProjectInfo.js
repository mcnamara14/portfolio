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
      const { company, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2 } = activeProject;

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
            <h5>{dates}</h5>
            <h3>Web development and all online marketing for Evo-Lite</h3>
            <i class="fas fa-long-arrow-alt-right"></i>
            <h4>{projectInfoTitle}</h4>
            <p>{projectInfoBodyP1}</p>
            <p>{projectInfoBodyP2}</p>
            <h4>Online Marketing</h4>
            <p>The clients business was in an industry with a lot of competition so online marketing / search engine optimization (SEO) efforts were extremely important. We did considerable keyword research to understand what people were searching for in order to find the clients type of company. We inserted these keywords throughout the website text, titles, page descriptions, as well as in blogs we helped the company create.</p>
            <p>This work along with other SEO techniques have brought the website to the very top of Google for the vast majority of keywords related to the products sold by the company. This has increased traffic by over times the original traffic of the old website and the website is now, by far, the biggest lead generator for Evo-Lite.</p>
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
