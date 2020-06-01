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
import { AppContext } from './Context';

const PageWrapper = ({ children, meta }) => {
  const { theme, updateTheme } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <SEO {...meta} />
      <div className="site">
        <header role="banner" className="header">
          <Link to="/" className="header__logo">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Kevtiq logo used by Kevin Pennekamp"
            />
          </Link>
          <button
            className="header__toggle"
            type="button"
            aria-label="theme switcher"
            onClick={updateTheme}>
            {theme === 'light' && <Moon />}
            {theme === 'dark' && <Sun />}
          </button>
        </header>
        {children}
        <footer className="footer">
          <span>© 2019-present Kevin Pennekamp. All Rights Reserved.</span>
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
