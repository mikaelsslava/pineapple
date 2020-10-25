import React from 'react';
import './Form.scss';

class Form extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form className="Form" onSubmit={this.handleSubmit}>
          <input className="Form-EmailInput" id="email" type="email" name="email" placeholder="Type your email address here..." required/>
          <input className="Form-Checkbox" type="checkbox" id="termsOfService" />
          <div className="Form-CheckboxLabel" for="checkbox">
            <p>I agree to <a>terms of service</a></p>
          </div>
        </form>
    );
  }
}

export default Form;
