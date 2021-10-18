import React from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

const Login = props => {
  
  const handleAuthedUser = id => {
    const { from } = props.location.state || {
      from: { pathname: '/questions' }
    };
    props.dispatch(setAuthedUser(id));
    props.history.push(from);
  };

  const { userIds, users } = props;
  console.log("props in login:", props)

  return (
    <div>
      <h2>Welcome to</h2>
      <h3>Would You Rather</h3>
      <h4>Select User</h4>
      {userIds.map(user => (
        <button key={user} onClick={() => handleAuthedUser(user)}>
          {users[user].name}
        </button>
      ))}
    </div>
  );

}

const mapStateToProps = ({ users }) => {
  return {
    userIds: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(Login);
