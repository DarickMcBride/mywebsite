import React, { Component } from 'react';
import {Button} from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <div className="intro">
          <p className="text-secondary text-smaller">
            Hello and welcome! My name is
          </p>
          <h1 className="name text-light display-1">
            Darick McBride.
          </h1>
          <h1 className="text-muted">
            I love to create cool stuff with code.
          </h1>
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
