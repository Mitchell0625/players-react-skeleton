import React from 'react';
import Header from './Header';
import Home from './Home';
import Register from './Register';
import Roster from './Roster';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/roster" component={() => <Roster />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
