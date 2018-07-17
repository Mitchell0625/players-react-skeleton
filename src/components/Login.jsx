import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '../api';
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
      password: '',
      message: true,
      err: '',
      errHappen: false
    };
    this.login = this.login.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.constraints = this.constraints.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value }, this.constraints());
  }
  constraints() {
    if (this.state.email.split('').filter(x => x === '@').length !== 1) {
      this.setState({ message: false });
    }
  }

  login(e) {
    const { email, password } = this.state;
    loginUser(email, password)
      .then((resp) => {
        if (resp.success) {
          this.props.holdUser(resp);
          this.props.history.push('/roster');
        } else {
          this.setState({ err: resp.error.message, errHappen: true });
        }
      })
      .catch((err) => {
        this.setState({ err: err.error.message, errHappen: true });
      });

    e.preventDefault();
  }

  render() {
    return (
      <div className="login-page">
        {this.state.errHappen && <div className="error">{this.state.err}</div>}

        <div className="login-container">
          <div className="login-header">
            <h2>Login</h2>
          </div>
          <form className="login-form" onSubmit={this.login}>
            <p>Email</p>
            <div className="login-inputs">
              <i className="fas fa-envelope" />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleInput}
                required
              />
            </div>
            <p>Password</p>
            <div className="login-inputs">
              <i className="fas fa-lock" />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleInput}
                onFocus={this.constraints}
                required
              />
            </div>
            <button
              id="login"
              type="submit"
              value="Submit"
              disabled={this.state.message}
            >
              Login
            </button>
          </form>
        </div>
        <p className="no-account">Don&#39;t have an account? <Link to="/register">Register</Link></p>
      </div>
    );
  }
}
Login.propTypes = propTypes;

export default withRouter(Login);
