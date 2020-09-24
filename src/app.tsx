import React from 'react';
import { AppRouter } from './app-router';
import './app.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faArrowLeft,
  faMoon,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeContextProvider } from './_shared/hooks/useTheme';

library.add(faSearch, faArrowLeft, faMoon, faChevronDown);

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <AppRouter />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
