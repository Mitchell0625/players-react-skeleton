import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { addPlayer, token } from '../api';

class MakePlayer extends Component {
  constructor(props) {
    super(props);
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

    addPlayer(first_name, last_name, rating, handedness).then(() =>
      this.props.history.push('/roster')
    );
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
            <button id="create" type="submit" value="Submit">
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

export default withRouter(MakePlayer);
