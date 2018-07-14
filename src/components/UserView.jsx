import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Roster from './Roster';
import { getPlayers, deletePlayer } from '../api';

class UserView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
    this.deleteAPlayer = this.deleteAPlayer.bind(this);
  }

  componentDidMount() {
    getPlayers()
      .then(data => this.setState({ players: data.players }))
      .catch(err => console.log(err.message));
  }
  deleteAPlayer(id) {
    deletePlayer(id)
      .then(() => {
        const newArr = this.state.players.slice();
        const currentList = newArr.filter(e => e.id !== id);
        this.setState({ players: currentList });
      })
      .catch(err => console.log(err));
  }

  render() {
    const team = this.state.players.map(e => (
      <Roster
        key={e.id}
        id={e.id}
        first={e.first_name}
        last={e.last_name}
        rating={e.rating}
        hand={e.handedness}
        delete={this.deleteAPlayer}
      />
    ));
    return (
      <div>

        <div>
          <Link to="/players/new">Add Players</Link>
          <div className="roster-box">
            <h2>Current Roster</h2>
            {this.state.players.length > 1 && (
              <div>
                <p>Sort by:</p>
                <select value="">
                  <option value="first_name">First Name</option>
                  <option value="last_name">Last Name</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            )}
            {this.state.players.length >= 1 && <div>{team}</div>}
          </div>
        </div>

      </div>
    );
  }
}

export default UserView;
