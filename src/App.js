import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Join from './Join';
import Home from './Home';
import Confirm from './Confirm';

function Router() {
  return (
    <Switch>
      <Route path="/join">
        <Join />
      </Route>

      <Route path="/confirm">
        <Confirm />
      </Route>
      
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default () => {
  return (
    <div>
      <Router />
    </div>
  );
}
