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
      </Helmet>

      <div className={`site ${className}`}>
        <header role="banner" className="header">
          <Link
            to="/"
            aria-label="Logo that redirects to the homepage"
            className="logo">
            <svg
              viewBox="0 0 250 300"
              fill="currentcolor"
              aria-label="Logo that redirects to the homepage"
              color="neutral.1"
              display="block">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M240.562 21.764C253.351 39.5066 253.123 63.5015 240 80.9982L187.5 150.997L240 220.995C251.363 236.146 253.191 256.416 244.721 273.355C236.252 290.293 218.939 300.993 200 300.993H50.5569C46.9423 301.034 43.2971 300.683 39.6833 299.919C36.6282 299.275 33.6577 298.349 30.8064 297.164C20.6439 292.943 12.3669 285.581 6.96137 276.444C3.09157 269.903 0.69351 262.453 0.129039 254.596C0.0386595 253.341 -0.0042715 252.085 -3.83534e-08 250.83V100.998C-3.83534e-08 79.4767 13.7715 60.3702 34.1886 53.5647L184.189 3.56579C204.938 -3.35038 227.774 4.02148 240.562 21.764ZM25 200.995V100.998C25 90.2372 31.8858 80.684 42.0943 77.2812L192.094 27.2823C202.469 23.8243 213.887 27.5102 220.281 36.3815C226.675 45.2527 226.561 57.2502 220 65.9985L171.875 130.164L165 120.997C155.557 108.407 140.738 100.998 125 100.998C109.262 100.998 94.4427 108.407 85 120.997L25 200.995ZM25.0614 252.751C25.0207 252.17 25 251.584 25 250.994V250.915C25.0175 245.63 26.7088 240.383 30 235.995L105 135.997C109.721 129.702 117.131 125.997 125 125.997C132.869 125.997 140.279 129.702 145 135.997L156.25 150.997L70 265.994C65.2462 272.332 57.8987 275.907 50.2793 275.994H50C48.2401 275.994 46.5083 275.809 44.8277 275.454C43.9112 275.26 42.9987 275.012 42.0943 274.711C41.5227 274.52 40.9614 274.311 40.4112 274.082C35.4893 272.037 31.2778 268.442 28.4921 263.739C28.1909 263.23 27.9063 262.708 27.6393 262.174C26.1418 259.179 25.2881 255.976 25.0614 252.751ZM93.75 275.994H200C209.469 275.994 218.126 270.644 222.361 262.174C226.596 253.705 225.682 243.57 220 235.995L171.875 171.829L93.75 275.994Z"
              />
            </svg>
          </Link>
          <button
            className="icon"
            type="button"
            aria-label="theme switcher"
            onClick={updateTheme}>
            <svg
              viewBox="0 0 32 32"
              fill="currentcolor"
              display="block"
              color="neutral.1">
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="currentcolor"
                strokeWidth="4"></circle>
              <path d=" M 16 0 A 16 16 0 0 0 16 32 z "></path>
            </svg>
          </button>
        </header>

        {children}

        <footer className="footer">
          <span>kevtiq.</span>
          <a href="https://twitter.com/kevtiq" alt="Link to my Twitter page">
            twitter
          </a>
          <a href="https://github.com/kevtiq" alt="Link to my Github page">
            Github
          </a>
          <a href="https://dribbble.com/kevtiq" alt="Link to my Dribbble page">
            Dribbble
          </a>
          <a
            href="https://dev.to/kevtiq"
            alt="Link to my the Practical Dev profile page">
            Dev.to
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
