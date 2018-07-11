import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="__Home">
    <Link to="/login">
      <button>Login</button>
    </Link>
    <Link to="/register">
      <button>Register</button>
    </Link>
  </div>
);

export default Home;
