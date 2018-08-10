import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <section className="nav">
        <div className="navContainer">
          <div className="navLeft">
            <div className="logo">tyler<span>mcnamara</span></div>
            <a>Projects</a>
            <NavLink to="/resume">Resume</NavLink>
          </div>
          <div className="navRight">
            <a>About</a>
            <a>Contact</a>
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default Nav;
