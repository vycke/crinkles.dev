import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import ExternalProfiles from './ExternalProfiles';
import useSiteMeta from '../hooks/useSiteMeta';

import '../styles/styles.scss';
import 'prism-theme-night-owl';

const PageWrapper = ({ children, meta }) => {
  const { title, description, keywords, siteUrl } = useSiteMeta();
  const keys = (meta.tags || keywords).join(', ');
  return (
    <div className="container">
      <Helmet title={meta.title || title}>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={meta.description || description} />
        <meta name="keywords" content={keys} />
        <meta name="theme-color" content="#01A282" />

        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/jhi5xcf.css" />

        <meta
          property="og:type"
          content={meta ? 'article' : 'business.business'}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content={`${siteUrl}${meta ? meta.slug : ''}`}
        />
        <meta property="og:image" content="/img/primary.svg" />
        <meta
          property="og:description"
          content={meta.description || description}
        />
        <meta name="twitter:creator" content="Kevin  Pennekamp" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={meta.description || description}
        />
      </Helmet>

      <Header />
      {children}
      <footer>
        <ExternalProfiles />
      </footer>
    </div>
  );
};

PageWrapper.defaultProps = {
  className: '',
  footer: false,
  meta: {}
};

export default PageWrapper;
