import React from 'react';

import PollPreview from './PollPreview';

const Poll = props => {
  const { id } = props.match.params;
  const { answeredIds, unansweredIds } = props;
  return (
    <div>
      {answeredIds.includes(id) ? (
        <PollPreview id={id} answered={true} />
      ) : unansweredIds.includes(id) ? (
        <PollPreview id={id} answered={false} />
      ) : null }
    </div>
  );
};

export default Poll;
