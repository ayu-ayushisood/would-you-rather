import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

const Header = (props) => {

  const handleLogout = () => {
    props.dispatch(setAuthedUser(null));
    props.history.push('/');
  };

    const { authedUser, users } = props;
    console.log("users", users)
    return (
      <div className="header">
        <h3>Hello, {users[authedUser].name}!</h3>
        <img src={users[authedUser].avatarURL} alt="Logged in user" className="profile-pic"/>
        <button>
          <a onClick={handleLogout}>Logout</a>
        </button>
      </div>
    );
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  };
}
export default withRouter(connect(mapStateToProps)(Header));
