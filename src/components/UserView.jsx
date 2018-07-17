import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Roster from './Roster';
import { getPlayers, deletePlayer, logged } from '../api';
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
      players: [],
      err: '',
      errHappen: false
    };
    this.deleteAPlayer = this.deleteAPlayer.bind(this);
  }

  componentDidMount() {
    getPlayers()
      .then((data) => {
        if (data.success) {
          this.setState({ players: data.players });
        } else {
          this.setState({ err: data.error.message, errHappen: true });
        }
      })
      .catch((err) => {
        this.setState({ err: err.error.message, errHappen: true });
      });
  }

  deleteAPlayer(id) {
    deletePlayer(id)
      .then((resp) => {
        if (resp.success) {
          const newArr = this.state.players.slice();
          const currentList = newArr.filter(e => e.id !== id);
          this.setState({ players: currentList });
        } else {
          this.setState({ err: resp.error.message, errHappen: true });
        }
      })
      .catch((err) => {
        this.setState({ err: err.error.message, errHappen: true });
      });
  }

  render() {
    const { players } = this.state;
    let team = (
      <div className="empty">
        {logged() ? (
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
        {this.state.errHappen && <div className="error">{this.state.err}</div>}
        <div className="roster-box">
          <h2>Roster</h2>
          <div className="roster-selections">
            {logged() && (
              <button
                className="userview-button"
                onClick={() => this.props.history.push('/player/new')}
              >
                Add Players
              </button>
            )}
          </div>
          <div className="roster-cont">
            {this.state.players.length > 1 && <div className="divider" />}
            {team}
          </div>
        </div>
      </div>
    );
  }
}

UserView.propTypes = propTypes;
export default withRouter(UserView);
