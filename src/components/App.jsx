import React from 'react';
import Header from './Header.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';

import routes from '../routes.js';
import '../styles/App.css';

const App = () => {
  return (
    <div className="__App">
      <Header />
      {/* <Home /> */}
      {routes}
      {/* <Login /> */}
    </div>
  );
};
export default App;
