import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middlewares from './middlewares';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);