import React from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

import Card from 'react-bootstrap/Card';

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
    <Card className="cardStyle">
      <Card.Header>
        <h2>Welcome to <b>Would You Rather</b> App!</h2>
        <h4>Please sign in to continue</h4>
      </Card.Header>
      <Card.Body>
        <div className="RRlogo" />
        <h4>Select User</h4>
        {userIds.map(user => (
          <button key={user} onClick={() => handleAuthedUser(user)}>
            {users[user].name}
          </button>
        ))}
      </Card.Body>
      
    </Card>
  );

}

const mapStateToProps = ({ users }) => {
  return {
    userIds: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(Login);
