import React from "react";

const Scorecard = props => {
  const { user } = props;
  return (
    <div>
      <img src={user.avatarURL} alt={`Profile picture of ${user}`} className="profile-pic"/>
      <div>
        <h2>{user.name}</h2>
        <p>Answered Questions: {Object.keys(user.answers).length}</p>
        <p>Created Questions: {user.questions.length}</p>
      </div>
      <hr/>
      <div>
        <h2>
          Score:{" "}
          <span className="score">{user.questions.length + Object.keys(user.answers).length}</span>
        </h2>
      </div>
    </div>
  );
};

export default Scorecard;
