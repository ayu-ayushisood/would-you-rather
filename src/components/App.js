import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';

import Login from './Login';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  console.log("props", props)
  return (
    <Router>
      <>
        <LoadingBar />
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </>
    </Router>
  );
}

function mapStateToProps() {
  return {
    
  };
}

export default connect(mapStateToProps)(App);
