import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Admin from './pages/admin/Admin';

import AuthPage from './pages/auth/Auth';
import ProfilePage from './pages/profile/Profile';
import WelcomePage from './pages/welcome/Welcome';

const Routes = () => {

  const [isLogged, setIsLogged] = useState(true);
  const admin = true;

  let routes;
  if (isLogged) {
    routes = (
      <Switch>

        <Route
          path="/profile/:id"
          component={ProfilePage}
        />

        {admin &&
          <Route
            path="/admin"
            component={Admin}
        />}


        <Redirect to="/nada" />

      </Switch>
    )
  } else {
    routes = (
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
    )
  }

  return (
    <Router>
      {isLogged && <MainNavigation />}
      <main>
        {routes}
      </main>
    </Router>
  )
}

export default Routes;