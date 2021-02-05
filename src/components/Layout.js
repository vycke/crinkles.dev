import React from 'react';
import { Link } from 'gatsby';

import '../styles/index.scss';
import { AppContext } from './Context';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, meta = {}, className = '' }) => {
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
          <div class="inner">
            <Link
              to="/"
              aria-label="Logo that redirects to the homepage"
              className="icon logo">
              <svg
                viewBox="0 0 191 201"
                fill="currentcolor"
                aria-label="Logo that redirects to the homepage">
                <path
                  fillRule="evenodd"
                  cliprule="evenodd"
                  d="M190.179 0.5H57.2524L14.5329 50.3394L14.4244 50.4732C-6.70869 76.5505 -3.48906 114.874 22.0586 137.024C25.859 140.318 29.9499 143.076 34.2348 145.3C31.4079 150.573 29.8 156.604 29.8 163C29.8 183.711 46.5893 200.5 67.3 200.5H190.178L104.464 100.501L190.179 0.5ZM59.794 152.614L59.7954 152.615L88.0008 119.708L135.822 175.5H67.3C60.3964 175.5 54.8 169.904 54.8 163C54.8 159.627 56.1193 156.588 58.2966 154.329L58.5492 154.067L59.794 152.614ZM88.0008 81.2935L135.824 25.5H68.7507L33.7466 66.3382C21.1855 81.9722 23.1505 104.882 38.4355 118.134C42.0811 121.295 46.1474 123.622 50.4161 125.14L88 81.2926L88.0008 81.2935Z"
                />
              </svg>
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
          </div>
        </header>

        {children}

        <footer className="footer">
          <span>© 2021 Kevtiq</span>
          <a href="https://twitter.com/kevtiq" alt="Link to my Twitter page">
            twitter
          </a>
          <a href="https://github.com/kevtiq" alt="Link to my Github page">
            github
          </a>
          <a
            href="https://dev.to/kevtiq"
            alt="Link to my the Practical Dev profile page">
            dev.to
          </a>
          <a
            href="https://kevtiq.dev/rss.xml"
            alt="Link to the RSS feed of kevtiq.dev">
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
