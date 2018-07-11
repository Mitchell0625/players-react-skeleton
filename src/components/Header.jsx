import React from 'react';
import '../styles/Header.css';
import paddle from '../images/ping-pong.png';

const Header = () => (
  <div className="__Header">
    <h1 className="__Header_h1">Pongtastic</h1>
    <img className="__Header_img" src={paddle} alt="ping pong paddle" />
  </div>
);

export default Header;
