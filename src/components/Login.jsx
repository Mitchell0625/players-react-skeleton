import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      user: {}
    };
    this.loginUser = this.loginUser.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginUser() {
    const { email, password } = this.state;
    login(email, password).then(resp =>
      this.setState({ user: resp.data }).then(() =>
        this.props.holdUser(this.state.user)
      )
    );
  }

  render() {
    const { email, password, user } = this.state;
    console.log(this.props);
    return (
      <div>
        <form>
          <input name="email" placeholder="Email" onChange={this.handleInput} />
          <input
            name="password"
            placeholder="Password"
            onChange={this.handleInput}
          />
          <button onClick={() => this.loginUser()}>Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
