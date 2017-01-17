import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import routes from './routes';

//Store takes several params; first one is root reducer(returns new state), second is initial state
//3rd param allows middleware
//thunk allows us to dispatch synchronous actions
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
