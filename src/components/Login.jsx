import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
      message: true
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
        this.props.holdUser(resp);
      }).then(() => this.props.history.push('/roster')).catch(err => console.log(err));


    e.preventDefault();
  }


  render() {
    if (this.state.err) {
      return <p>{this.state.errInfo}</p>;
    }
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <h2>Login</h2>
          </div>
          <form className="login-form" onSubmit={this.login}>
            <p>Email</p>
            <div>
              <input
                id="email"
                type="email"
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
                onFocus={this.constraints}
                required
              />
            </div>
            <button id="login" type="submit" value="Submit" disabled={this.state.message}>
              Login
            </button>
          </form>
        </div>
        <button className="cancel" onClick={() => this.props.history.push('/')}>Cancel</button>
      </div>
    );
  }
}
Login.propTypes = propTypes;

export default withRouter(Login);
