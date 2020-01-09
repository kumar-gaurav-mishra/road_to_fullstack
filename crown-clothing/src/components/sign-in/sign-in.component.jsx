import React from 'react';

import './sign-in.style.scss';

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
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} required />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
