import React from 'react';
import Github from './Github';
import Twitter from './Twitter';
import logoDark from '../img/logo-dark.svg';
import logoLight from '../img/logo-light.svg';
import { Link } from 'gatsby';
import Sun from './Sun';
import Moon from './Moon';

import '../styles/styles.scss';
import 'prism-theme-night-owl';
import SEO from './SEO';
import Dribbble from './Dribbble';
import Dev from './Dev';

const PageWrapper = ({ children, meta }) => {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    setTheme(window.__theme || 'dark');
  }, []);

  return (
    <React.Fragment>
      <SEO {...meta} />
      <div className="container">
        <header role="banner">
          <Link to="/" className="logo">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Kevtiq logo used by Kevin Pennekamp"
              className="logo__img"
            />
            <span className="logo__text">kevtiq</span>
          </Link>
          <button
            className={`toggle toggle__${theme}`}
            type="button"
            onClick={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark';
              setTheme(newTheme);
              window.__setPreferredTheme(newTheme);
            }}>
            {theme === 'light' && <Moon />}
            {theme === 'dark' && <Sun />}
          </button>
        </header>
        <aside className="welcome">
          <p className="welcome-text">
            Hello, I am Kevin Pennekamp a front-end engineer @{' '}
            <a href="https://finaps.nl" alt="Finaps website">
              Finaps
            </a>
          </p>
        </aside>
        <main>{children}</main>
        <footer>
          <a href="https://twitter.com/kevtiq" alt="Link to my Twitter page">
            <Twitter />
          </a>
          <a href="https://github.com/kevtiq" alt="Link to my Github page">
            <Github />
          </a>
          <a href="https://dribbble.com/kevtiq" alt="Link to my Dribbble page">
            <Dribbble />
          </a>
          <a href="https://dev.to/kevtiq" alt="Kevin Pennekamp's DEV Profile">
            <Dev />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

PageWrapper.defaultProps = {
  className: '',
  footer: false,
  meta: {}
};

export default PageWrapper;
