import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';

// Pages
const HomePage = lazy(() => import('@app/pages/home'));
const AboutPage = lazy(() => import('@app/pages/about'));
const AuthPage = lazy(() => import('@app/pages/auth'));

function AppRouter() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <Route
        exact
        path="/about"
        component={AboutPage}
      />
      <Route
        path="/auth"
        component={AuthPage}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRouter;
