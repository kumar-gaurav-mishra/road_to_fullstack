import React from 'react';
import FormInput from '../form-input/font-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = e => e.preventDefault();
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign In with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
