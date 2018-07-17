import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addPlayer } from '../api';
import Roster from './Roster';
import '../styles/css/MakePlayer.css';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
class MakePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: 0,
      handedness: '',
      id: '',
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
    if ((this.state.handedness !== '') && (firstName !== lastName)) {
      this.setState({ button: false });
    }
  }


  createPlayer(e) {
    const {
      firstName, lastName, rating, handedness
    } = this.state;

    addPlayer(firstName, lastName, rating, handedness).then(() => this.props.history.push('/roster'))
      .catch(err => console.log(err));
    e.preventDefault();
  }

  render() {
    return (
      <div className="make-player-page">
        <div className="make-player-flex">
          <div className="make-player-container">
            <h2>Create New Player</h2>
            <div className="player-form">
              <form onSubmit={this.createPlayer}>
                <p>First Name</p>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={this.handleInput}
                />
                <p>Last Name</p>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={this.handleInput}
                />
                <p>Rating <span className="italic">(number)</span></p>
                <input
                  id="rating"
                  type="number"
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
            </div>
          </div>
          <div className="player-card">
            <Roster first={this.state.firstName} last={this.state.lastName} rating={this.state.rating} hand={this.state.handedness} id={this.state.id} />
          </div>
        </div>
        <button className="reset">
          Cancel
        </button>
      </div>


    );
  }
}

MakePlayer.propTypes = propTypes;

export default withRouter(MakePlayer);
