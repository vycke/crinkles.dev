import React from 'react';
import { Link } from 'gatsby';

import '../styles/index.scss';
import { AppContext } from './Context';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, meta = {}, className = '', title }) => {
  const { updateTheme } = React.useContext(AppContext);

  const seo = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    twitter: meta.twitterName,
    image: `${meta.siteUrl}${
      meta.category ? `/img/headers/${meta.category}.png` : meta.image
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
          content={meta.category ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>

      <div className={`site ${className}`}>
        <header role="banner" className="header">
          <Link
            to="/"
            aria-label="Logo that redirects to the homepage"
            className="icon logo">
            <svg
              viewBox="0 0 302 250"
              fill="currentcolor"
              aria-label="Logo that redirects to the homepage">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M280.236 9.43788C262.493 -3.35051 238.497 -3.12282 221 9.99998L21 160C3.78278 172.913 -3.23988 195.394 3.56583 215.811C10.3715 236.228 29.4785 250 51 250H201C222.521 250 241.628 236.228 248.434 215.811L298.434 65.8114C305.35 45.0624 297.978 22.2263 280.236 9.43788ZM265.618 29.7189C256.746 23.3247 244.749 23.4386 236 30L36 180C27.3914 186.456 23.8801 197.697 27.2829 207.906C30.6858 218.114 40.2392 225 51 225H201C211.761 225 221.314 218.114 224.717 207.906L274.717 57.9057C278.175 47.5312 274.489 36.1131 265.618 29.7189Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7648 9.43788C39.5078 -3.35051 63.5033 -3.12282 81.0003 9.99998L281 160C298.218 172.913 305.24 195.394 298.434 215.811C291.629 236.228 272.522 250 251 250H101C79.4788 250 60.3719 236.228 53.5662 215.811L3.56617 65.8114C-3.35015 45.0624 4.02186 22.2263 21.7648 9.43788ZM36.3826 29.7189C45.2541 23.3247 57.2518 23.4386 66.0003 30L266 180C274.609 186.456 278.12 197.697 274.717 207.906C271.315 218.114 261.761 225 251 225H101C90.2396 225 80.6861 218.114 77.2832 207.906L27.2832 57.9057C23.8251 47.5312 27.5111 36.1131 36.3826 29.7189Z"
              />
            </svg>

            {title && <span className="bold">{title}</span>}
          </Link>
          <button
            className="icon"
            type="button"
            aria-label="theme switcher"
            onClick={updateTheme}>
            <svg
              viewBox="0 0 250 250"
              fill="currentcolor"
              display="block"
              color="neutral.1">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M140.811 2.56583C130.548 -0.855278 119.452 -0.855278 109.189 2.56583L34.1886 27.5658C13.7715 34.3715 0 53.4785 0 75V175C0 196.522 13.7715 215.628 34.1886 222.434L109.189 247.434C119.452 250.855 130.548 250.855 140.811 247.434L215.811 222.434C236.229 215.628 250 196.522 250 175V75C250 53.4785 236.229 34.3715 215.811 27.5658L140.811 2.56583ZM125 75C152.614 75 175 97.3858 175 125C175 152.614 152.614 175 125 175V188V225C127.67 225 130.34 224.572 132.906 223.717L207.906 198.717C218.114 195.314 225 185.761 225 175V75C225 64.2392 218.114 54.6858 207.906 51.2829L132.906 26.2829C130.34 25.4276 127.67 25 125 25V55V75ZM150 125C150 138.807 138.807 150 125 150C111.193 150 100 138.807 100 125C100 111.193 111.193 100 125 100C138.807 100 150 111.193 150 125Z"
              />
            </svg>
          </button>
        </header>

        {children}

        <footer className="footer">
          <span>© 2020 by Vycke.</span>
          <a href="https://twitter.com/vycke_" alt="Link to my Twitter page">
            twitter
          </a>
          <a href="https://github.com/vycke" alt="Link to my Github page">
            github
          </a>
          {/* <a href="https://dribbble.com/vycke" alt="Link to my Dribbble page">
              dribbble
            </a> */}
          <a
            href="https://dev.to/vycke"
            alt="Link to my the Practical Dev profile page">
            dev.to
          </a>
          <a
            href="https://vycke.dev/rss.xml"
            alt="Link to the RSS feed of vycke.dev">
            rss
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
