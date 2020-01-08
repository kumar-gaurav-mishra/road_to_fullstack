import React from 'react';

import './sign-in.style.scss';

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign In with your email and password.</span>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={this.state.email} placeholder="Email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} placeholder="password" required />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
