import React from 'react';

const Roster = props => {
  return (
    <div className="roster">
      {location.pathname === '/roster' ? (
        <div className="player-card">
          <p>{props.first}</p>
          <p>{props.last}</p>
          <p>{props.rating}</p>
          <p>{props.handedness}</p>
          <button onClick={() => props.delete()}>Delete Player</button>
        </div>
      ) : (
        <div className="name-box">
          <p>
            {props.first} {props.last}
          </p>
        </div>
      )}
    </div>
  );
};
export default Roster;
