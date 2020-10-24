import React from 'react';
import './Header.scss';

class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <img className="Header-LogoImage" src="images/Union.svg" />
          <img className="Header-LogoText" src="images/pineapple.svg" />
        </div>
        <nav>
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Header;
