import React from 'react';
import logo from '../img/primary.svg';
import { Link } from 'gatsby';
import ExternalProfiles from './ExternalProfiles';

const Header = () => {
  return (
    <header role="banner">
      <div className="header__inner">
        <div>
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="Kevtiq logo used by Kevin Pennekamp"
              className="logo__img"
            />
            <span className="logo__text">kevtiq</span>
          </Link>
          <p className="welcome-text">
            Hello, I am Kevin Pennekamp a front-end engineer @{' '}
            <a href="https://finaps.nl" alt="Finaps website">
              Finaps
            </a>
          </p>
        </div>
        <div className="profile">
          <ExternalProfiles />
        </div>
      </div>
    </header>
  );
};

export default Header;
