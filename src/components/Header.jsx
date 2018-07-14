import React from 'react';
import paddle from '../images/ping-pong.png';
import '../styles/css/Header.css';

function Header() {
  return (
    <div className="header-container">
      <h1 className=" header-h1">Pongtastic</h1>
      <img className="header-img" src={paddle} alt="ping pong paddle" />
    </div>
  );
}
export default Header;
