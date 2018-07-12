import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.loginUser = this.loginUser.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginUser() {
    const { email, password } = this.state;
    login(email, password)
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
        <input name="email" placeholder="Email" onChange={this.handleInput} />
        <input
          name="password"
          placeholder="Password"
          onChange={this.handleInput}
        />
        <button onClick={() => this.loginUser()}>Login</button>
      </div>
    );
  }
}

export default withRouter(Login);
