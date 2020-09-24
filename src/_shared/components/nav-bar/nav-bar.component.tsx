import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './nav-bar.styles.scss';

export const NavBar = () => {
  const theme = useTheme();
  const changeToTheme = theme.name === 'light' ? 'dark' : 'light';
  return (
    <nav className={`nav-bar nav-bar__${theme.name}`}>
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <button onClick={() => theme.setTheme(changeToTheme)}>
        <FontAwesomeIcon icon="moon" className="nav-bar__mode-icon" />
        {changeToTheme} Mode
      </button>
    </nav>
  );
};
