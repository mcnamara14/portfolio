import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Resume.css';
import Nav from '../Nav/Nav';

class Resume extends Component {
  componentDidMount() {
    console.log('hello')
  }
  render() {

    return (
      <section className="resume">
        <Nav />
        <h1>Resume!!!</h1>
      </section>
    );
  }
}

export default Resume;
