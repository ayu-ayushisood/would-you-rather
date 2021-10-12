import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

function App() {
  return (
    <Router>
      <>
        <LoadingBar />
        <Switch>

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
