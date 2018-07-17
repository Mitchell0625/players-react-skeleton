import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Roster from './Roster';
import { getPlayers, deletePlayer, token } from '../api';
import '../styles/css/UserView.css';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
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
      .then((data) => {
        this.setState({ players: data.players });
      })
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
    const { players } = this.state;
    let team = (
      <div className="empty">
        {token ? (
          <div>
            <p>Your roster is empty.</p>
          </div>
        ) : (
          <div>
            <p>Please login to view roster</p>
            <button
              className="login"
              onClick={() => this.props.history.push('/login')}
            >
              Login now
            </button>
          </div>
        )}
      </div>
    );

    if (players && players.length > 0) {
      team = this.state.players
        .sort((a, b) => b.rating - a.rating)
        .map(e => (
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
    }

    return (
      <div className="userview-page">
        <div className="roster-box">
          <h2>Roster</h2>
          <div className="roster-selections">
            {this.state.players && this.state.players.length > 1 ? (
              <div className="sort">
                <p>Sort by:</p>
                {/* <select value="">
                  <option value="rating">Rating</option>
                </select> */}
                <div className="sort" id="last">
                  Last Name
                </div>
                <div className="sort" id="rating">
                  Rating
                </div>
              </div>
            ) : (
              ''
            )}
            {token && (
              <button
                className="userview-button"
                onClick={() => this.props.history.push('/player/new')}
              >
                Add Players
              </button>
            )}
          </div>
          <div className="roster-cont">
            {this.state.players && <div className="divider" />}
            {team}
          </div>
        </div>
      </div>
    );
  }
}

UserView.propTypes = propTypes;
export default withRouter(UserView);
