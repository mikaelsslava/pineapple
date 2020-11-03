import React from 'react';
import './SocialMedia.scss';

class SocialMedia extends React.Component {

  render() {
    return (
      <div className="SocialMedia">
        <div className="SocialMedia-LinksWrapper">
          <a href="#">
            <div className="SocialMedia-Link SocialMedia-Link_facebook">

            </div>
          </a>
          <a href="#">
            <div className="SocialMedia-Link SocialMedia-Link_instagram">

            </div>
          </a>
          <a href="#">
            <div className="SocialMedia-Link SocialMedia-Link_twitter">

            </div>
          </a>
          <a href="#">
            <div className="SocialMedia-Link SocialMedia-Link_youtube">

            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
