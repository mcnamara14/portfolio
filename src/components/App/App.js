import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'; 
import Hero from '../Hero/Hero';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero />
        <div className="mainContent">
        </div>
      </div>
    );
  }
}

export default App;
