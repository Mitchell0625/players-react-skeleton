import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../api';

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

  login() {
    const { email, password } = this.state;
    loginUser(email, password)
      .then(resp => {
        console.log(resp);
        this.props.holdUser(resp);
      })
      .then(() => this.props.history.push('/roster'))
      .catch(err => console.log(err));
  }

  render() {
    const { email, password, user } = this.state;
    return (
      <div>
        <label>Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleInput}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleInput}
        />
        <button id="login" onClick={() => this.login()}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
