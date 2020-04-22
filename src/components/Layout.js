import React from 'react';
import { Link } from 'gatsby';

import SEO from './SEO';
import logoDark from '../img/logo-dark.svg';
import logoLight from '../img/logo-light.svg';

import Dribbble from '../icons/Dribbble';
import Dev from '../icons/Dev';
import Sun from '../icons/Sun';
import Moon from '../icons/Moon';
import Github from '../icons/Github';
import Twitter from '../icons/Twitter';

import '../styles/styles.scss';
import 'prism-theme-night-owl';

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
