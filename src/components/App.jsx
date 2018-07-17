import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserView from './UserView';
import MakePlayer from './MakePlayer';
import { token } from '../api';

import '../styles/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.holdUser = this.holdUser.bind(this);
  }

  holdUser(info) {
    this.setState({ user: info });
    localStorage.setItem('token', this.state.user.token);
  }

  render() {
    console.log(token);
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/login"
            render={() => <Login holdUser={this.holdUser} />}
          />
          <Route
            path="/register"
            render={() => <Register holdUser={this.holdUser} />}
          />
          <Route
            path="/roster"
            render={() => <UserView user={this.state.user} />}
          />
          <Route
            path="/player/new"
            render={() => <MakePlayer user={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
