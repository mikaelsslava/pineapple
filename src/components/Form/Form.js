import React from 'react';
import './Form.scss';
import axios from 'axios';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      termsOfService: false,
      message: '',
      isValidationNeeded: true
     };
  }

  componentDidMount() {
    document.getElementById("form-submit").addEventListener("click", this.handleSubmit);
  }

  componentDidUpdate() {
    if (this.state.isValidationNeeded) {
      this.validateEmail();
    } else {
      this.showMessage();
    }
  }

  validateEmail() {

    if (!this.state.email) {
      this.disableArrow();
      this.setState({
        message: 'Email address is required',
        isValidationNeeded: false
      });
      return ;
    }

    if (!/.+@.+\.[A-Za-z]+$/.test(this.state.email)) {
      this.disableArrow();
      this.setState({
        message: 'Please provide a valid e-mail address',
        isValidationNeeded: false
      });
      return ;
    }

    if (this.state.email.substr(this.state.email.length - 3) === '.co') {
      this.disableArrow();
      this.setState({
        message: 'We are not accepting subscriptions from Colombia emails',
        isValidationNeeded: false
      });
      return ;
    }

    if (!this.state.termsOfService) {
      this.disableArrow();
      this.setState({
        message: 'You must accept the terms and conditions',
        isValidationNeeded: false
      });
      return ;
    }

    this.hideMessage();
    this.enableArrow();
  }

  enableArrow() {
    document.getElementById("form-submit").style.display = 'block';
    setTimeout(() =>
      document.getElementById("form-submit").style.opacity = 1, 1
    );
  }

  disableArrow() {
    document.getElementById("form-submit").style.opacity = 0;
    setTimeout(() =>
      document.getElementById("form-submit").style.display = 'none', 300
    );
  }

  hideMessage() {
    document.getElementsByClassName("Form-Message")[0].style.opacity = 0;
  }

  showMessage() {
    document.getElementsByClassName("Form-Message")[0].style.opacity = 1;
  }

  handleSubmit = (event) => {

    const data = {
      email: this.state.email
    };

    axios.post('/api/routes/insert.php', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      isValidationNeeded: true
    });
  }

  handleCheckboxChange = (event) => {
    this.setState({
      termsOfService: !this.state.termsOfService,
      isValidationNeeded: true
     });
  }

  render() {
    return (
        <form id="newsletter-form" className="Form">
          <div className="Form-EmailInputWrapper">
            <input className="Form-EmailInput" id="email" type="email" name="email" placeholder="Type your email address here..." onChange={ this.handleEmailChange }/>
            <div className="Form-Message">
              <p>{ this.state.message }</p>
            </div>
            <div id="form-submit" className="Form-EmailInputWrapperArrow"> </div>
          </div>
          <input className="Form-Checkbox" type="checkbox" id="termsOfService" onChange={ this.handleCheckboxChange }/>
          <div className="Form-CheckboxLabel" for="checkbox">
            <p>I agree to <a>terms of service</a></p>
          </div>
        </form>
    );
  }
}

export default Form;
