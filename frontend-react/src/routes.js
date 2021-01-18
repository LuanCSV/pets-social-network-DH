import React  from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Admin from './pages/admin/Admin';

import AuthPage from './pages/auth/auth';
import ProfilePage from './pages/profile/Profile';
import WelcomePage from './pages/welcome/Welcome';

// onde o context eh criado 
import { AuthContext } from './shared/context/AuthContext';
// onde os valores do context sao definidos
import { useAuth } from './shared/hooks/auth-hook';

const Routes = () => {

  const { admin, login, logout, token, userId } = useAuth();

  let routes;
  if (token) {
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
    // atribue os valores/funcoes do auth-hook no context criado
    <AuthContext.Provider
      value={{
        login: login,
        logout: logout,
        userId: userId,
        token: token,
        admin: admin
      }}>
      <Router>
        {token && <MainNavigation />}
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  )
}

export default Routes;