import React from 'react';
import './PageContent.scss';
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';

class PageContent extends React.Component {

  render() {
    return (
      <div className="PageContent">
        <Header />
        <div className="PageContent-Left">
          <Subscribe />
        </div>
        <div className="PageContent-Right">
          <img src="images/image_summer.png" alt="image" />
        </div>
      </div>
    );
  }
}

export default PageContent;
