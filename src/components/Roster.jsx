import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/Roster.css';


const propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  hand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired
};
function Roster(props) {
  return (
    <div className="roster-card">
      <div className="player-card">
        <div className="roster-header">
          <p>{props.first} {props.last}</p>
        </div>
        <p>Rating: {props.rating}</p>
        <p>{props.hand} Handed</p>
        <button onClick={() => props.delete(props.id)}>Delete Player</button>
      </div>
    </div>
  );
}

Roster.propTypes = propTypes;
export default Roster;
