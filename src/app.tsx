import React from 'react';
import { AppRouter } from './app-router';
import './app.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faArrowLeft,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faArrowLeft, faMoon);

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
