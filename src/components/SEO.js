import React from 'react';
import Helmet from 'react-helmet';
import useSiteMeta from '../hooks/useSiteMeta';

const SEO = ({ description, title, tags, slug, img }) => {
  const meta = useSiteMeta();

  const seo = {
    title: title || meta.title,
    description: description || meta.description,
    keywords: (tags || meta.keywords).join(', '),
    twitter: meta.twitterName,
    image: img || meta.image,
    url: `${meta.siteUrl}${slug ? slug : ''}`
  };

  return (
    <Helmet title={title || meta.title}>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keyword} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {slug && <meta property="og:type" content="article" />}
      <meta name="twitter:site" content={seo.twitter} />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={seo.image} />

      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
      />
      <link rel="stylesheet" href="https://use.typekit.net/jhi5xcf.css" />
    </Helmet>
  );
};

export default SEO;
