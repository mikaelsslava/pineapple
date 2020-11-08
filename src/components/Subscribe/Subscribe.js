import React from 'react';
import './Subscribe.scss';
import Form from '../Form/Form';
import SocialMedia from '../SocialMedia/SocialMedia';

class Subscribe extends React.Component {

  render() {
    return (
      <div className="Subscribe">
        <div className="Subscribe-TopText">
          <h1>Subscribe to newsletter</h1>
          <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
        </div>
          <Form />
      </div>
    );
  }
}

export default Subscribe;
