import React from 'react';
import './SocialMedia.scss';

class SocialMedia extends React.Component {

  handleClick() {
      console.log('asdasd');

  }

  render() {
    return (
      <div className="SocialMedia">
        <div className="SocialMedia-LinksWrapper">
          <div className="SocialMedia-Link SocialMedia-Link_facebook" onclick= { this.handleClick() }>

          </div>
          <div className="SocialMedia-Link SocialMedia-Link_instagram" onclick= { this.handleClick() }>

          </div>
          <div className="SocialMedia-Link SocialMedia-Link_twitter" onclick= { this.handleClick() }>

          </div>
          <div className="SocialMedia-Link SocialMedia-Link_youtube" onclick= { this.handleClick() }>

          </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
