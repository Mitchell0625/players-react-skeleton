import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addPlayer } from '../api';

class MakePlayer extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
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
    const { first_name, last_name } = this.state;
    // if (first_name !== last_name) {
    //   if (this.state.handedness == "left" || "right") {
    //     this.setState({ button: false });
    //   } else {
    //     this.setState({ button: true });
    // }
    // }
  }

  createPlayer(e) {
    const { user } = this.props;
    const { first_name, last_name, rating, handedness } = this.state;

    addPlayer(user.token, first_name, last_name, rating, handedness);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Create New Player</h2>
        <div className="player-form">
          <form onSubmit={this.createPlayer}>
            <p>First Name</p>
            <input type="text" name="first_name" onChange={this.handleInput} />
            <p>Last Name</p>
            <input type="text" name="last_name" onChange={this.handleInput} />
            <p>Rating</p>
            <input type="text" name="rating" onChange={this.handleInput} />
            <p>Serving Hand</p>
            <select
              name="handedness"
              value={this.state.handedness}
              onChange={this.handleInput}
            >
              <option value="" />
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <button type="submit" value="Submit">
              Create
            </button>
          </form>
        </div>
        <Link to="/roster">Go Back to Roster</Link>
      </div>
    );
  }
}

export default MakePlayer;
