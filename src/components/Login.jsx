import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../api';
// import ErrorBoundary from './ErrorBoundary';
import '../styles/css/Login.css';

const propTypes = {
  holdUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    const { email, password } = this.state;
    loginUser(email, password)
      .then((resp) => {
        this.props.holdUser(resp);
      }).then(() => this.props.history.push('/roster'));


    e.preventDefault();
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <form className="login-form" onSubmit={this.login}>
          <p>Email</p>
          <div>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleInput}
              required
            />
            <i className="fas fa-envelope" />
          </div>
          <p>Password</p>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInput}
              required
            />
          </div>
          <button id="login" type="submit" value="Submit">
            Login
          </button>
          <button type="reset" value="reset">Cancel</button>
        </form>
      </div>
    );
  }
}
Login.propTypes = propTypes;

export default withRouter(Login);
