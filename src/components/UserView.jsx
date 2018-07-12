import React, { Component } from 'react';
import Roster from './Roster';
import { Link, withRouter } from 'react-router-dom';
import { getPlayers } from '../api';

class UserView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  // componentDidMount() {
  //   getPlayers(this.props.user.token).then(resp =>
  //     this.setState({ players: resp.data })
  //   );
  // }

  render() {
    console.log(this.props);
    let players = [];

    return (
      <div>
        {this.props.user.token ? (
          <div>
            <Link to="/players/new">Add Players</Link>
            <div className="roster-box">
              <h2>Current Roster</h2>
              {this.state.players.length > 1 && (
                <select value="">
                  <option value="first_name">First Name</option>
                  <option value="last_name">Last Name</option>
                  <option value="rating">Rating</option>
                </select>
              )}
              {this.state.players.length > 1
                ? (players = this.state.players.map((e, i) => {
                    return (
                      <Roster
                        key={i}
                        first={e.first_name}
                        last={e.last_name}
                        rating={e.rating}
                        hand={e.handedness}
                      />
                    );
                  }))
                : ''}
            </div>
          </div>
        ) : (
          <div>
            <p>Please login to view Roster</p>
            <button onClick={() => this.props.history.push('/login')}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(UserView);