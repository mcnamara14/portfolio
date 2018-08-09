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
            <h5>2012-2017</h5>
            <h3>Web development and all online marketing for Evo-Lite</h3>
            <i class="fas fa-long-arrow-alt-right"></i>
            <h4>Website Design & Development</h4>
            <p>When approached by Evo-Lite originally, they had a very simple, static website with very little content. As a growing company they required a site that could expand to meet their needs as they matured. We designed a website that could be updated easily and included the many features they required, including: photo gallery, web chat, landing pages for newsletter leads, product documentation hub, multiple contact forms, and dynamic product pages.</p><p>The process was extensive but resulted in the client getting exactly what they needed out of a site.</p>
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
