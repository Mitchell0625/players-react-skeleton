import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../api';
import '../styles/css/Login.css';

const propTypes = {
  holdUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.string.isRequired
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
      })
      .then(() => this.props.history.push('/roster'))
      .catch(err => console.log(err));

    e.preventDefault();
  }

  render() {
    return (
      <div className="login-page">
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={this.login}>
          <p>Email</p>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleInput}
            required
          />
          <p>Password</p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleInput}
            required
          />
          <button id="login" type="submit" value="Submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = propTypes;

export default withRouter(Login);
