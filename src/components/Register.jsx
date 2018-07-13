import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../api';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: true
    };
    this.handleInput = this.handleInput.bind(this);
    this.confirmation = this.confirmation.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.confirmation()
    );
  }

  confirmation() {
    const { confirmPassword, password } = this.state;
    if (password !== '' && password === confirmPassword) {
      this.setState({ message: false });
    } else {
      this.setState({ message: true });
    }
  }
  createUser(e) {
    console.log('hit');
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;

    registerUser(firstName, lastName, email, password, confirmPassword)
      .then(resp => this.props.holdUser(resp))
      .then(() => this.props.history.push('/roster'))
      .catch(err => console.log(err.message));
    e.preventDefault();
  }
  render() {
    return (
      <div className="Register__page">
        <form onSubmit={this.createUser}>
          <p>First Name</p>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleInput}
          />
          <p>Last Name</p>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleInput}
          />
          <p>Email</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleInput}
          />

          <p>Password</p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.handleInput}
          />
          <p>Confirm Password</p>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={this.handleInput}
          />
          {this.state.message && this.state.password ? (
            <p>Passwords do not match</p>
          ) : (
            ''
          )}
          <button
            id="register"
            type="submit"
            value="Submit"
            disabled={this.state.message}
          >
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Register);
