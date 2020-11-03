import React from 'react';
import './Form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      termsOfService: false
     };
  }

  handleClick = (event) => {
    // insert TASK2 functionality here
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleCheckboxChange = (event) => {
    this.setState({ termsOfService: event.target.checked });
  }

  componentDidUpdate() {
    document.getElementById("form-submit").addEventListener("click", this.handleClick);
  }

  render() {
    return (
        <form id="newsletter-form" className="Form">
          <div className="Form-EmailInputWrapper">
            <input className="Form-EmailInput" id="email" type="email" name="email" placeholder="Type your email address here..." onChange={ this.handleEmailChange } required/>
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
