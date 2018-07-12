import React, { Component } from 'react';

const Roster = props => {
  return (
    <div className="name-box">
      <p>{props.first}</p>
      <p>{props.last}</p>
      <p>{props.rating}</p>
      <p>{props.handedness}</p>
      <button>Delete Player</button>
    </div>
  );
};
export default Roster;
