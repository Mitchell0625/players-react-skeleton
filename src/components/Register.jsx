import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="Register__page">
        <form>
          <input name="email" placeholder="email" />
          <input name="username" placeholder="username" />
          <input name="password" placeholder="password" />
          <input name="confirmPassword" placeholder="confirmPassword" />
        </form>
      </div>
    );
  }
}
export default Register;
