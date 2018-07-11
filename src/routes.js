import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Roster from './components/Roster';

export default (
  <Switch>
    <Route exact path="/" component={() => <Home />} />
    <Route path="/register" component={() => <Register />} />
    <Route path="/roster" component={() => <Roster />} />
  </Switch>
);
