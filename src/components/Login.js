import React from 'react';
import { connect } from 'react-redux';

const Login = props => {

  const { userIds, users } = props;
  console.log(props.userIds)

  return (
    <div>
      <h2>Welcome to</h2>
      <h3>Would You Rather</h3>
      <h4>Select User</h4>
    </div>
  );

}

function mapStateToProps({ users }) {
  return {
    userIds: users,
    users
  };
}

export default connect(mapStateToProps)(Login);
