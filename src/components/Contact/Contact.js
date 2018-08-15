import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Contact.css';
import Nav from '../Nav/Nav';
import contactImg from './images/contact-main.jpg';

class Contact extends Component {
  componentDidMount() {
    console.log('hello')
  }
  render() {

    const backgroundImage = {backgroundImage: "url(" + contactImg + ")"};

    return (
      <div style={backgroundImage} className="contact">
        <Nav />
        <section className="contactHeader">
          <h1>Get in Touch</h1>
        </section>
        <section className="contactContainer">
            <h2>Contact</h2>
            <div className="contactInfo">
              <div className="contactIcon"><i class="fas fa-envelope"></i><h3>Email</h3><a href="mailto:mcnamara14@gmail.com" target="_blank">mcnamara14@gmail.com</a></div>
              <div className="contactIcon"><i class="fas fa-mobile-alt"></i><h3>Phone</h3><a href="#">303.478.0477</a></div>
              <div className="contactIcon"><i class="fab fa-github-alt"></i><h3>GitHub</h3><a href="https://github.com/mcnamara14" target="_blank">mcnamara14</a></div>
              <div className="contactIcon"><i class="fab fa-linkedin-in"></i><h3>LinkedIn</h3><a href="https://www.linkedin.com/in/tylermcnamara/" target="_blank">tylermcnamara</a></div>
            </div>
        </section>
      </div>
    );
  }
}

export default Contact;
