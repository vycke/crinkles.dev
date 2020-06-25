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
              viewBox="0 0 251 202"
              fill="currentcolor"
              aria-label="Logo that redirects to the homepage"
              color="neutral.1"
              display="block">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M91 21C74.4315 -1.09139 43.0914 -5.56855 21 11C-1.09139 27.5685 -5.56855 58.9086 11 81L86 181C87.3932 182.858 88.8908 184.591 90.4786 186.197C97.5432 193.346 106.393 197.989 115.77 199.945C117.588 200.325 119.434 200.606 121.3 200.782C132.944 201.885 145.009 198.931 155.204 191.59C155.817 191.149 156.421 190.694 157.014 190.224C160.794 187.239 164.03 183.81 166.704 180.068L241.003 81.003C241.259 80.6609 241.511 80.3161 241.758 79.9688C246.799 72.8892 250.041 64.44 250.819 55.2882C251.075 52.3064 251.064 49.3014 250.783 46.3105C249.58 33.383 243.456 21.8836 234.303 13.7043C225.461 5.80316 213.791 1 201 1C173.386 1 151 23.3858 151 51C151 76.5907 170.225 97.6911 195.02 100.646L171.992 131.351C170.45 127.751 168.457 124.275 166.003 121.003L91 21ZM66.0108 31C61.633 27.7111 56.34 26.0026 51 25.9985V26.003C45.7388 26.0035 40.7285 27.6556 36.5883 30.5767C36.3918 30.7156 36.1967 30.8576 36.0029 31.0029C35.7062 31.2255 35.4159 31.4533 35.132 31.6862C32.4682 33.8741 30.2402 36.6262 28.642 39.8226C27.8762 41.3541 27.2789 42.94 26.8476 44.5555C26.4028 46.2261 26.1317 47.9387 26.0382 49.664C25.7454 55.1392 27.2563 60.6528 30.4884 65.2917C30.6552 65.5308 30.8267 65.7679 31.0029 66.0029L106.003 166.003C106.163 166.216 106.325 166.426 106.49 166.632C109.555 170.459 113.643 173.258 118.207 174.757C121.388 175.797 124.755 176.193 128.097 175.915C131.421 175.636 134.625 174.697 137.534 173.185C138.728 172.562 139.887 171.834 141 171C142.182 170.114 143.262 169.143 144.24 168.103C144.862 167.439 145.451 166.739 146.003 166.003L146.226 165.705C152.514 157.063 152.748 144.997 146 136L71 36C70.2789 35.0385 69.5018 34.1437 68.6767 33.3168C67.8349 32.4735 66.9441 31.7009 66.0108 31ZM225.76 54.4782C225.326 57.571 224.313 60.5889 222.735 63.3622C218.432 70.9106 210.31 76 201 76C187.193 76 176 64.8071 176 51C176 37.1929 187.193 26 201 26C208.966 26 216.061 29.7256 220.64 35.5293C221.679 36.8486 222.594 38.2842 223.363 39.8226C224.619 42.3342 225.422 44.9923 225.782 47.6867C225.926 48.7707 226 49.8767 226 51C226 52.1803 225.918 53.3415 225.76 54.4782Z"
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
          <span>Vycke.</span>
          <a href="https://twitter.com/vyckedev" alt="Link to my Twitter page">
            twitter
          </a>
          <a href="https://github.com/vycke" alt="Link to my Github page">
            Github
          </a>
          <a href="https://dribbble.com/vycke" alt="Link to my Dribbble page">
            Dribbble
          </a>
          <a
            href="https://dev.to/vycke"
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
