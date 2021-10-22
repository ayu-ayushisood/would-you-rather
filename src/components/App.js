import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';

import Header from './Header';
import Navigation from './Navigation';
import Login from './Login';
import CardComponent from './CardComponent';
import List from './List';
import Poll from './Poll';
import PollPreview from './PollPreview';
import ScorecardList from './ScorecardList';
import '../App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, answeredIds, unansweredIds } = this.props;
    return (
      <Router>
        <>
          <LoadingBar />
            {authedUser !== null && (
              <div>
                <Header />
                <Navigation />
              </div>
            )}
          <Switch>
            <Route path="/" exact component={Login} />
            <CardComponent
              isAuthenticated={authedUser !== null}
              exact
              path="/questions"
              component={props => (
                <List
                  {...props}
                  answeredIds={answeredIds}
                  unansweredIds={unansweredIds}
                />
              )}
            />
            <CardComponent
                isAuthenticated={authedUser !== null}
                path="/questions/:id"
                component={props => (
                  <Poll
                    {...props}
                    answeredIds={answeredIds}
                    unansweredIds={unansweredIds}
                  />
                )}
              />
              <CardComponent
                isAuthenticated={authedUser !== null}
                path="/add"
                component={PollPreview}
              />
              <CardComponent
                isAuthenticated={authedUser !== null}
                path="/leaderboard"
                component={ScorecardList}
              />
          </Switch>
        </>
      </Router>
    );
  }
}

function mapStateToProps({authedUser, users, questions}) {
  if (users && authedUser) {
    const unansweredIds = [];
    const answeredIds = Object.keys(users[authedUser].answers);
    const questionsId = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    
    questionsId.map(
      id => answeredIds.includes(id) === false && unansweredIds.push(id)
    );
    answeredIds.sort((a, b) => questions[b] - questions[a]);
    console.log("ids for logged in user", authedUser, answeredIds, unansweredIds)
    return {
      authedUser,
      answeredIds,
      unansweredIds
    };
  }
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
