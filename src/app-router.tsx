import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { CountryDetails } from './country-details/country-details.component';

import { Dashboard } from './dashboard/dashboard.component';
import { NavBar } from './_shared/components/nav-bar/nav-bar.component';
import { CountryContextProvider } from './_shared/hooks/useCountryContext';
import { useTheme } from './_shared/hooks/useTheme';

export const AppRouter = () => {
  const theme = useTheme();
  return (
    <div className={`app app__${theme.name}`}>
      <Router>
        <NavBar />
        <div className="app__main-content">
          <CountryContextProvider>
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route
                exact
                path={['/country', '/country/:code']}
                component={CountryDetails}
              />
            </Switch>
          </CountryContextProvider>
        </div>
      </Router>
    </div>
  );
};
