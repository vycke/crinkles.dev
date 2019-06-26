import React from 'react';
import logo from '../img/primary.svg';
import { Link } from 'gatsby';
import Sun from './Sun';
import Moon from './Moon';
import Toggle from './Toggle';

const Header = () => {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    setTheme(window.__theme);
  }, []);

  return (
    <React.Fragment>
      <header role="banner">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Kevtiq logo used by Kevin Pennekamp"
            className="logo__img"
          />
          <span className="logo__text">kevtiq</span>
        </Link>
        {theme && (
          <Toggle
            checked={theme === 'dark'}
            onClick={(v) => {
              window.__setPreferredTheme(v ? 'dark' : 'light');
              setTheme(v ? 'dark' : 'light');
            }}
            label="Switch between Dark and Light mode"
            icons={[Moon, Sun]}
          />
        )}
      </header>
      <aside className="welcome">
        <p className="welcome-text">
          Hello, I am Kevin Pennekamp a front-end engineer @{' '}
          <a href="https://finaps.nl" alt="Finaps website">
            Finaps
          </a>
        </p>
      </aside>
    </React.Fragment>
  );
};

export default Header;
