import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/Roster.css';

const defaultProps = {
  delete: PropTypes.func
};

const propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  hand: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  delete: PropTypes.func
};
function Roster(props) {
  return (
    <div className="roster-card">

      <div className="roster-header">
        <p className="roster-name">{props.first} {props.last}</p>
      </div>
      <div className="circle">
        <i className="far fa-user fa-5x" />
      </div>
      <div className="roster-footer">
        <p><span className="bold">R</span>: {props.rating}</p>
        <p><span className="bold">H</span>:{props.hand}</p>
      </div>
      {window.location.pathname === '/roster' && <button className="delete" onClick={() => props.delete(props.id)}>Delete Player</button>}


    </div>
  );
}

Roster.defaultProps = defaultProps;
Roster.propTypes = propTypes;
export default Roster;
