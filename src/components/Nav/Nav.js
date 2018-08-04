import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <section className="nav">
        <div className="navLeft">
          <div className="logo">tyler<span>mcnamara</span></div>
          <a>Projects</a>
          <a>Resume</a>
        </div>
        <div className="navRight">
          <a>About</a>
          <a>Contact</a>
          <i class="fas fa-bars"></i>
        </div>
      </section>
    );
  }
}

export default Nav;
