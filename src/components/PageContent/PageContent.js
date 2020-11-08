import React from 'react';
import './PageContent.scss';
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Success from '../Success/Success';
import SocialMedia from '../SocialMedia/SocialMedia';

class PageContent extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
           isFormSubmitted: false
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      document.getElementById("form-submit").addEventListener("click", this.handleSubmit);
    }

    handleSubmit() {
      this.setState({ isFormSubmitted: true });
    }

  render() {
    return (
      <div className="PageContent">
        <Header />
        <div className="PageContent-Left">
          {(this.state.isFormSubmitted) ? <Success /> : <Subscribe /> }
          <SocialMedia />
        </div>
        <div className="PageContent-Right">
          <img src="images/image_summer.png" alt="image" />
        </div>
      </div>
    );
  }
}

export default PageContent;
