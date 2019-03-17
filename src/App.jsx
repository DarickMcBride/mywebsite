import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './NavBar';
import './App.css';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="projects" exact path="/projects" component={ProjectsPage} />
          <Route name="about" exact path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
