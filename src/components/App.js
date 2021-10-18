import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';

import Header from './Header';
import Navigation from './Navigation';
import Login from './Login';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  console.log("props in main app:", props)
  return (
    <Router>
      <>
        <LoadingBar />
          {props.authedUser !== null && (
            <div>
              <Header />
              <Navigation />
            </div>
          )}
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </>
    </Router>
  );
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
