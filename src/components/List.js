import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import PollPreview from './PollPreview';

const List = (props) => {

  const [tabState, setTabState] = useState('unanswered');

  const handleTabs = event => {
     setTabState(event.target.value);
  };
  const { unansweredIds, answeredIds } = props;
  return (
    <div>
      <div>
        <button value="unanswered" onClick={handleTabs}>
          Unanswered
        </button>
        <button value="answered" onClick={handleTabs}>
          Answered
        </button>
      </div>
      
        {tabState === 'unanswered'
          ? unansweredIds.map(id => (
              <div key={id}>
                <Link to={`/questions/${id}`}>
                  <div>
                    <PollPreview id={id} />
                  </div>
                </Link>
              </div>
            ))
          : answeredIds.map(id => (
              <div key={id}>
                <Link to={`/questions/${id}`}>
                  <div>
                    <PollPreview id={id} />
                  </div>
                </Link>
              </div>
            ))}
      
    </div>
  );
  
}

export default List;
