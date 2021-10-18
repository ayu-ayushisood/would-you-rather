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
    return (
      <div>
        <h1>Hey {users[authedUser].name}!</h1>
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
