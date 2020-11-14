import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome/welcome';

const Routes = () => (
  <BrowserRouter>

    <Switch>
      <Route
        exact
        path="/"
        component={WelcomePage}
      />
    </Switch>

  </BrowserRouter>
)

export default Routes;