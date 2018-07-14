import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addPlayer } from '../api';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.string.isRequired
  }).isRequired
};
class MakePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: '',
      handedness: '',
      button: true
    };

    this.handleInput = this.handleInput.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.constraints = this.constraints.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.constraints();
    });
  }
  constraints() {
    const { firstName, lastName } = this.state;
    if (firstName !== lastName) {
      if (this.state.handedness === 'left' || this.state.handedness === 'right') {
        this.setState({ button: false });
      } else {
        this.setState({ button: true });
      }
    }
  }

  createPlayer(e) {
    const {
      firstName, lastName, rating, handedness
    } = this.state;

    addPlayer(firstName, lastName, rating, handedness).then(() =>
      this.props.history.push('/roster'));
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Create New Player</h2>
        <div className="player-form">
          <form onSubmit={this.createPlayer}>
            <p>First Name</p>
            <input
              id="firstName"
              type="text"
              name="first_name"
              onChange={this.handleInput}
            />
            <p>Last Name</p>
            <input
              id="lastName"
              type="text"
              name="last_name"
              onChange={this.handleInput}
            />
            <p>Rating</p>
            <input
              id="rating"
              type="text"
              name="rating"
              onChange={this.handleInput}
            />
            <p>Handedness</p>
            <select
              name="handedness"
              id="handedness"
              value={this.state.handedness}
              onChange={this.handleInput}
            >
              <option value="" />
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <button id="create" type="submit" value="Submit" disabled={this.state.button}>
              Create
            </button>
          </form>
          {/* <div className="created">
            <p>Player created successfully</p>
          </div> */}
        </div>
      </div>
    );
  }
}

MakePlayer.propTypes = propTypes;

export default withRouter(MakePlayer);
