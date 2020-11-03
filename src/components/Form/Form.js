import React from 'react';
import './Form.scss';

class Form extends React.Component {

  submitForm() {
    // insert TASK2 functionality here
  }

  render() {
    return (
        <form className="Form" onSubmit={this.handleSubmit}>
          <div className="Form-EmailInputWrapper">
            <input className="Form-EmailInput" id="email" type="email" name="email" placeholder="Type your email address here..." required/>
            <div className="Form-EmailInputWrapperArrow" onClick= { this.submitForm() }> </div>
          </div>
          <input className="Form-Checkbox" type="checkbox" id="termsOfService" />
          <div className="Form-CheckboxLabel" for="checkbox">
            <p>I agree to <a>terms of service</a></p>
          </div>
        </form>
    );
  }
}

export default Form;
