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
                d="M221 9.99998C238.497 -3.12282 262.493 -3.35051 280.236 9.43788C297.978 22.2263 305.35 45.0624 298.434 65.8114L269.83 151.623L281 160C298.217 172.913 305.24 195.394 298.434 215.811C291.629 236.228 272.522 250 251 250H101C100.987 250 100.974 250 100.961 250H98.9459C98.9506 249.986 98.9552 249.972 98.9599 249.959C78.2789 249.12 60.1557 235.581 53.5659 215.811L3.56586 65.8114C-3.35046 45.0624 4.02157 22.2263 21.7645 9.43789C39.5075 -3.3505 63.503 -3.12281 81 10L151 62.5L221 9.99998ZM130.167 78.125L66 30C57.2515 23.4386 45.2537 23.3248 36.3823 29.7189C27.5108 36.1131 23.8248 47.5312 27.2829 57.9057L53.2515 135.811L130.167 78.125ZM61.5848 160.811L151 93.75L240.415 160.811L224.717 207.906C221.314 218.114 211.761 225 201 225L101 225C100.991 225 100.982 225 100.972 225C90.2228 224.988 80.6829 218.105 77.2829 207.906L61.5848 160.811ZM244.305 225H251C261.761 225 271.314 218.114 274.717 207.906C278.12 197.697 274.609 186.456 266 180L261.497 176.623L248.434 215.811C247.354 219.051 245.965 222.123 244.305 225ZM248.749 135.811L171.833 78.125L236 30C244.749 23.4386 256.746 23.3247 265.618 29.7189C274.489 36.1131 278.175 47.5312 274.717 57.9057L248.749 135.811Z"
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
