import React from 'react';
import './Success.scss';

class Success extends React.Component {

  render() {
    return (
      <div className="Success">
        <div className="Success-Icon"></div>
        <div className="Success-Text">
          <h1>Thanks for subscribing!</h1>
          <p>You have successfully subscribed to our email listing.
            Check your email for the discount code.</p>
        </div>
      </div>
    );
  }
}

export default Success;
