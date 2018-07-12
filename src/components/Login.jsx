import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input name="email" placeholder="Email" onChange={this.handleInput} />
          <input
            name="password"
            placeholder="Password"
            onChange={this.handleInput}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
