import React from 'react';
import { Link } from 'gatsby';
import logo_dark from '../img/logo-dark.svg';
import logo_light from '../img/logo-light.svg';

import Dribbble from '../icons/Dribbble';
import Dev from '../icons/Dev';
import Github from '../icons/Github';
import Twitter from '../icons/Twitter';

import 'prism-theme-night-owl';
import '../styles/index.scss';
import { AppContext } from './Context';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, meta = {}, className = '' }) => {
  const { theme, updateTheme } = React.useContext(AppContext);

  const seo = {
    title: meta.title,
    description: meta.description,
    keywords: (meta.tags || meta.keywords).join(', '),
    twitter: meta.twitterName,
    image: `${meta.siteUrl}${
      meta.featuredImage ? `/img/${meta.featuredImage}` : meta.image
    }`,
    url: `${meta.siteUrl}${meta.slug || ''}`,
  };

  return (
    <React.Fragment>
      <Helmet title={seo.title}>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keyword} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        {meta.slug && <meta property="og:type" content="article" />}
        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="monetization" content="$ilp.uphold.com/dDdhAM4apdQJ" />
        <meta
          name="twitter:card"
          content={meta.featuredImage ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:image" content={seo.image} />
        <link rel="stylesheet" href="https://use.typekit.net/jhi5xcf.css" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
        />
      </Helmet>

      <div className={`site ${className}`}>
        <header role="banner" className="header">
          <Link to="/" className="header__logo">
            <img
              src={theme === 'dark' ? logo_dark : logo_light}
              alt="Kevtiq logo used by Kevin Pennekamp"
            />
          </Link>
          <button
            className="header__toggle"
            type="button"
            aria-label="theme switcher"
            onClick={updateTheme}>
            <svg
              viewBox="0 0 32 32"
              fill="currentcolor"
              width="1em"
              height="1em"
              display="block"
              color="neutral.1"
              class="icon">
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="currentcolor"
                stroke-width="4"></circle>
              <path d=" M 16 0 A 16 16 0 0 0 16 32 z "></path>
            </svg>
          </button>
        </header>

        {children}

        <footer className="footer">
          <span>© 2019 - present Kevin Pennekamp. All Rights Reserved.</span>
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
  meta: {},
};

export default PageWrapper;
