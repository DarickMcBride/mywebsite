import React, { Component } from 'react';
import {Route,HashRouter} from "react-router-dom";
import './App.css';


import NavBar from './NavBar';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ExperiencePage from './ExperiencePage';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="my-navbar">
          <NavBar />
        </div>
        <div className="Main-body" >
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/projects" component={ProjectsPage}/>
          <Route path="/experience" component={ExperiencePage}/>
          <Route path="/contact" component={ContactPage}/>
        </div>

      </HashRouter>
      
    );
  }
}

export default App;
