import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="pong-game">
        <div className="pong paddle left" />
        <div className="pong ball" />
        <div className="net" />
        <div className="pong paddle right" />
      </div>
      <Link to="/login">
        <button className="home-button">Login</button>
      </Link>
      <Link to="/register">
        <button className="home-button">Register</button>
      </Link>
    </div>
  );
};
export default Home;
