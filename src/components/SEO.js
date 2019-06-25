import React from 'react';
import Helmet from 'react-helmet';
import useSiteMeta from '../hooks/useSiteMeta';

const SEO = ({ description, title, tags, slug }) => {
  const meta = useSiteMeta();
  const metaDescription = description || meta.description;
  const metaTitle = title || meta.title;
  const keys = (tags || meta.keywords).join(', ');
  const url = `${meta.siteUrl}${slug ? slug : ''}`;

  return (
    <Helmet title={metaTitle}>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keys} />
      <meta name="theme-color" content="#01A282" />

      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
      />
      <link rel="stylesheet" href="https://use.typekit.net/jhi5xcf.css" />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/img/primary.svg" />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:creator" content="Kevin  Pennekamp" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
