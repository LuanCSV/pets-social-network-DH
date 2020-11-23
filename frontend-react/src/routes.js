import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from './pages/auth/auth';
import WelcomePage from './pages/welcome/welcome';

const Routes = () => (
  <Router>

    <Switch>
      <Route
        exact
        path="/"
        component={WelcomePage}
      />
      <Route
        exact
        path="/auth"
        component={AuthPage}
      />

      <Redirect to="/" />
    </Switch>

  </Router>
)

export default Routes;