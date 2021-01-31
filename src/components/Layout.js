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
                viewBox="0 0 250 301"
                fill="currentcolor"
                aria-label="Logo that redirects to the homepage">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
