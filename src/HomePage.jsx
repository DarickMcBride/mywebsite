import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <div className="intro">
          <p className="text-secondary text-smaller">
            Hello and welcome! My name is
          </p>
          <h1 className="name">
            Darick McBride.
          </h1>
          <h1 className="text-muted">
            I love to create cool stuff with code.
          </h1>
      </div>
    )
  }
}
export default HomePage;
