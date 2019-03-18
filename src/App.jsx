import React, { Component } from 'react';
import {Route,HashRouter} from "react-router-dom";
import './App.css';


import NavBar from './NavBar';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import logo from './logo.svg'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div >
          <NavBar />
        </div>

        <div className="Main-body" >
          <img src={logo} className="Large-app-logo" alt="logo" />
          <Route exact path="/" component={HomePage}/>
          <Route path="/projects" component={ProjectsPage}/>
          <Route path="/about" component={AboutPage}/>
        </div>

      </HashRouter>
      
    );
  }
}

export default App;
