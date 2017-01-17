import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

export default (
  //root route = "/", and component that we want to render for this path
  <Route path="/" component={App}>
    //index route is a default root route; when nothing else is rendered
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
  </Route>
  )
