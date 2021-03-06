import React from 'react';
import { Link } from 'react-router-dom';
import paddle from '../images/ping-pong.png';
import '../styles/css/Header.css';
import { logout, logged } from '../api';


function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <h1 className=" header-h1">Pongtastic</h1>
        <img className="header-img" src={paddle} alt="ping pong paddle" />
      </div>
      {logged() && (window.location.pathname === '/roster' || window.location.pathname === '/player/new') ? (
        <div className="sign-out">
          <Link to="/">
            <button className="logout" onClick={() => logout()}>Logout</button>
          </Link>
        </div>
      ) : ('')}
    </div>
  );
}


export default Header;
