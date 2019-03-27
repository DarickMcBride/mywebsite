import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ExperiencePage from './components/ExperiencePage';
class App extends Component {
  render() {
    return (
        <div>
          <div >
            <NavBar />
          </div>
          <div className="Main-body" data-spy="scroll" data-target="#NavBar" data-offset="0">
            <HomePage id="home"/>
            <AboutPage id="about"/>
            <ExperiencePage id="experience"/>
            <ProjectsPage id="projects"/>
            <ContactPage id="contact"/>
          </div>    
        </div>
    );
  }
}

export default App;
