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
                viewBox="0 0 205 246"
                fill="currentcolor"
                aria-label="Logo that redirects to the homepage">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M143.629 8.20426C127.365 -2.73477 106.073 -2.73474 89.809 8.20427L25.0293 51.7751C10.5242 59.6856 0 74.8813 0 93.8916V148.108C0 167.08 10.4808 182.243 24.9377 190.163L89.809 233.796C106.073 244.735 127.365 244.735 143.629 233.796L183.748 206.811C212.044 187.78 212.044 146.236 183.748 127.204L174.524 121L183.808 114.756C212.135 95.7029 212.012 54.1989 183.748 35.1886L143.629 8.20426ZM34.6766 74.238C28.0426 78.7 24.0658 86.159 24.0658 94.1399V147.86C24.0658 155.841 28.0426 163.3 34.6766 167.762L37.3333 169.549C44.6399 173.213 53.7859 173.257 61.6059 167.997L69.7907 162.492V79.5078L61.5865 73.9897C53.7982 68.7513 44.6918 68.7773 37.4008 72.4057L34.6766 74.238ZM93.8565 95.6945V146.306L131.48 121L93.8565 95.6945ZM103.264 213.894L69.4681 191.163C71.3622 190.217 73.2298 189.131 75.0609 187.899L153.002 135.476L170.293 147.106C184.441 156.622 184.441 177.394 170.293 186.91L130.174 213.894C122.042 219.363 111.396 219.363 103.264 213.894ZM75.0414 54.0878L153.002 106.524L170.353 94.8537C184.47 85.3591 184.472 64.6274 170.293 55.0904L130.174 28.1061C122.042 22.6366 111.396 22.6366 103.264 28.1062L69.4711 50.8352C71.3573 51.7786 73.2174 52.861 75.0414 54.0878Z"
                />
              </svg>
            </Link>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="links">
            <span>© 2021 crinkle</span>
            <a
              href="https://twitter.com/kevtiq"
              title="Link to my Twitter page">
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
              href="https://crinkle.dev/rss.xml"
              title="Link to the RSS feed of crinkle.dev">
              rss
            </a>
          </div>
          <span className="italic text-000 pb-00">
            "A crinkles (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on the surface of
            something. It highlights personality and makes each surface unique."
          </span>
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
