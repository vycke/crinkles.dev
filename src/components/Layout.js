import React from 'react';
import { Link } from 'gatsby';

import '../styles/index.scss';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, meta = {}, className = '' }) => {
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
      <Helmet htmlAttributes={{ lang: 'en' }} title={seo.title}>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="content" content={seo.keywords} />
        <meta name="property" content={seo.keywords} />
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
        <header className="header">
          <div className="inner">
            <Link
              to="/"
              aria-label="Logo that redirects to the homepage"
              className="logo">
              <svg
                viewBox="0 0 198 206"
                fill="currentcolor"
                aria-label="Logo that redirects to the homepage">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M197.615 0H58.1025L14.6123 50.7385L14.4821 50.8992C-7.49708 78.0205 -4.14895 117.876 22.4209 140.912C25.7296 143.781 29.2507 146.258 32.9251 148.347C30.5998 153.418 29.3 159.062 29.3 165C29.3 187.091 47.2086 205 69.3 205H197.613L109.757 102.501L197.615 0ZM62.7774 157.309L62.7788 157.309L90.0008 125.55L132.387 175H69.3C63.7771 175 59.3 170.523 59.3 165C59.3 162.3 60.3504 159.876 62.0969 158.063L62.4 157.749L62.7774 157.309ZM90.0008 79.452L132.388 30H71.9006L37.6711 69.9344C25.9758 84.5238 27.8176 105.886 42.0732 118.246C45.0222 120.802 48.263 122.773 51.665 124.175L90 79.4511L90.0008 79.452Z"
                />
              </svg>
            </Link>
          </div>
        </header>

        {children}

        <footer className="footer">
          <span>© 2019-2021 Kevtiq</span>
          <a href="https://twitter.com/kevtiq" title="Link to my Twitter page">
            twitter
          </a>
          <a href="https://github.com/kevtiq" title="Link to my Github page">
            github
          </a>
          <a
            href="https://dev.to/kevtiq"
            title="Link to my the Practical Dev profile page">
            dev.to
          </a>
          <a
            href="https://kevtiq.dev/rss.xml"
            title="Link to the RSS feed of kevtiq.dev">
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
