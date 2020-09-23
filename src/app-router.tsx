import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Dashboard } from './dashboard/dashboard.component';
import { CountryContextProvider } from './_shared/hooks/useCountryContext';
import { ThemeContextProvider } from './_shared/hooks/useTheme';
// import Country from './country';

export const AppRouter = () => {
  return (
    <Router>
      <ThemeContextProvider>
        <CountryContextProvider>
          <Switch>
            <Route path="/" component={Dashboard} />
            {/* <Route path={['/country', '/country/:code']} component={Country} /> */}
          </Switch>
        </CountryContextProvider>
      </ThemeContextProvider>
    </Router>
  );
};
