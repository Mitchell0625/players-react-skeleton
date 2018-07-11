import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {}
  render() {
    return (
      <div className="Register__page">
        <form>
          <p>First Name</p>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleInput}
          />
          <p>Last Name</p>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleInput}
          />
          <p>Email</p>
          <input
            id="email"
            name="email"
            placeholder="email"
            onChange={this.handleInput}
          />

          <p>Password</p>
          <input
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.handleInput}
          />
          <p>Confirm Password</p>
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={this.handleInput}
          />
          <button id="register" type="submit" value="Submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
