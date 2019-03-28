import React, { Component } from 'react';
import {Button} from 'reactstrap';

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page" id="contact">
        <div>
            <h1 className='text-secondary display-3'>
              Get In Touch
            </h1>
            <p className="contact-paragraph text-smaller text-muted">
              I would love to hear from you. 
              My inbox is always open whether it be 
              for an opportunity you think might interest me 
              or just to say hi.
            </p>
        </div>
        <div>
          <Button outline color="secondary" href="mailto:darickmcbride@me.com" target="_top">
            Lets Chat
          </Button>{' '}
        </div>
      </div>
    )
  }
}
export default ContactPage;
