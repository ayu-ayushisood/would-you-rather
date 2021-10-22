import React from 'react';

const NewPoll = props => {
  const { handleNewPoll, answerOne, answerTwo } = props;
  return (
    <div>
      <form>
        <textarea
          placeholder="Enter Option 1 text here"
          value={answerOne}
          name="optionOne"
          onChange={handleNewPoll}
          rows="2"
          style={{ resize: 'none' }}
        />
        <textarea
          placeholder="Enter Option 2 text here"
          value={answerTwo}
          name="optionTwo"
          onChange={handleNewPoll}
          rows="2"
          style={{ resize: 'none' }}
        />
      </form>
    </div>
  );
};

export default NewPoll;
