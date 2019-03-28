import React, { Component } from 'react';
import {Button} from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <div className="intro" id="home">
        <div className="intro-text">
          <div className="text-secondary text-smaller display-7">
            Hello and welcome! My name is
          </div>
          <div className="text-light display-1">
            Darick McBride.
          </div>
          <div className="text-muted display-4">
            I love to create cool stuff with code.
          </div>
          <p className="intro-paragraph text-smaller text-muted">
            I'm a <mark className="text-secondary">software engineer</mark> based in Sacramento/Folsom, CA
            specializing in building excellent, high-quality websites and applications. 
            Currently working at Walters and Wolf as a Web/Application Engineer.
          </p>
        </div>
        <div>
          <Button outline color="secondary" href="mailto:darickmcbride@me.com" target="_top">
            Say Hello
          </Button>{' '}
          <Button outline color="secondary" href="https://www.linkedin.com/in/darickmcbride/" target="_top">
            Connect with me on LinkedIn
          </Button>{' '}
          <Button outline color="secondary" href="https://github.com/DarickMcBride" target="_top">
            Check out my Github
          </Button>{' '}
        </div>
      </div>
    )
  }
}
export default HomePage;
