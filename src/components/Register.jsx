import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../api';
import '../styles/css/Register.css';

const propTypes = {
  holdUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: true,
      locked: false,
      errorInfo: '',
      error: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.confirmation = this.confirmation.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.confirmation());
  }

  confirmation() {
    const { confirmPassword, password } = this.state;
    if (password !== '' && password === confirmPassword) {
      this.setState({ message: false, locked: true });
    } else {
      this.setState({ message: true, locked: false });
    }
  }
  createUser(e) {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;

    registerUser(firstName, lastName, email, password, confirmPassword).catch(err => console.log(err))
      .then(resp => this.props.holdUser(resp))
      .then(() => this.props.history.push('/roster'))
      .catch(err => console.log(err.message));
    e.preventDefault();
  }
  render() {
    return (
      <div className="register-page">
        {this.state.error && <p>{this.state.errorInfo}</p>}
        <div className="register">
          <div className="register-header">
            <h2>Register</h2>
          </div>
          <form className="register-form" onSubmit={this.createUser}>
            <p>First Name</p>
            <i className="fas fa-user" />
            <input
              id="firstName"
              className="register-inputs-text"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleInput}
            />
            <p>Last Name</p>
            <i className="fas fa-user" />
            <input
              id="lastName"
              className="register-inputs-text"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleInput}
            />
            <p>Email</p>
            <i className="fas fa-envelope" />
            <input
              id="email"
              className="register-inputs-text"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleInput}
            />

            <p>Password</p>
            <i className="fas fa-lock-open" />
            <input
              id="password"
              className="register-inputs-text"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={this.handleInput}
            />

            <p>Confirm Password</p>
            <i className="fas fa-lock-open" />
            <i className="fas fa-lock" />
            <input
              id="confirmPassword"
              className="register-inputs-text"
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
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}
Register.propTypes = propTypes;
export default withRouter(Register);
