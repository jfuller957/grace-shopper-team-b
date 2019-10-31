import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './store';

const _Home = ({ auth, logout }) => (
  <div className="container">
    <h2>Home</h2>
    <h4>Welcome {auth.email}</h4>
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={logout}
    >
      Logout
    </button>
  </div>
);

const Home = connect(
  ({ auth }) => {
    return { auth };
  },
  dispatch => {
    return {
      logout: () => dispatch(logout())
    };
  }
)(_Home);

export default Home;
