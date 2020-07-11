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
            className="logo">
            <svg
              viewBox="0 0 250 200"
              fill="currentcolor"
              aria-label="Logo that redirects to the homepage"
              color="neutral.1"
              display="block">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M90.0008 20.0021C73.4327 -2.08835 42.0933 -6.56531 20.0025 10.0025C-2.0884 26.5703 -6.56545 57.909 10.0027 79.9994L85.001 179.995C86.3941 181.852 87.8917 183.585 89.4794 185.192C96.5438 192.34 105.393 196.983 114.77 198.939C116.589 199.32 118.435 199.6 120.3 199.776C131.944 200.879 144.009 197.925 154.203 190.585C154.816 190.144 155.42 189.688 156.014 189.219C159.793 186.234 163.029 182.805 165.703 179.063L240 80.0024C240.257 79.6603 240.508 79.3155 240.755 78.9683C245.796 71.8889 249.038 63.4402 249.816 54.2887C250.072 51.3071 250.061 48.3022 249.78 45.3115C248.578 32.3845 242.454 20.8857 233.3 12.7066C224.458 4.8059 212.789 0.00294481 199.998 0.00294481C172.385 0.00294481 149.999 22.3877 149.999 50.0007C149.999 75.5903 169.224 96.6897 194.019 99.6447L170.991 130.348C169.449 126.748 167.456 123.273 165.002 120.001L90.0008 20.0021ZM65.0122 30.0016C60.6345 26.7129 55.3417 25.0045 50.0018 25.0004V25.0048C44.7406 25.0054 39.7305 26.6574 35.5904 29.5784C35.3939 29.7172 35.1988 29.8593 35.0051 30.0046C34.7084 30.2271 34.4181 30.4549 34.1341 30.6878C31.4704 32.8756 29.2425 35.6276 27.6443 38.8238C26.8786 40.3553 26.2812 41.9411 25.8499 43.5565C25.4052 45.227 25.134 46.9396 25.0406 48.6648C24.7478 54.1397 26.2586 59.6531 29.4906 64.2918C29.6574 64.5309 29.8289 64.768 30.0052 65.003L105.003 164.999C105.163 165.212 105.326 165.421 105.491 165.627C108.556 169.455 112.643 172.254 117.208 173.752C120.388 174.792 123.755 175.188 127.097 174.91C130.421 174.631 133.625 173.692 136.533 172.18C137.728 171.558 138.887 170.83 140 169.995C141.181 169.109 142.262 168.139 143.24 167.098C143.862 166.435 144.45 165.735 145.002 164.999L145.225 164.701C151.513 156.059 151.747 143.994 145 134.997L70.0013 35.0014C69.2802 34.0399 68.5031 33.1452 67.678 32.3184C66.8363 31.4751 65.9455 30.7025 65.0122 30.0016ZM224.758 53.4788C224.324 56.5714 223.31 59.5892 221.732 62.3623C217.43 69.9105 209.308 74.9996 199.998 74.9996C186.191 74.9996 174.999 63.8073 174.999 50.0007C174.999 36.1942 186.191 25.0018 199.998 25.0018C207.964 25.0018 215.059 28.7273 219.637 34.5308C220.677 35.85 221.592 37.2854 222.361 38.8239C223.617 41.3354 224.42 43.9933 224.78 46.6875C224.924 47.7716 224.998 48.8775 224.998 50.0007C224.998 51.181 224.916 52.3421 224.758 53.4788Z"
              />
            </svg>
            {title || 'Vycke.'}
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
              {/* <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="currentcolor"
                strokeWidth="4"></circle>
              <path d=" M 16 0 A 16 16 0 0 0 16 32 z "></path> */}
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
          <span>© Vycke.</span>
          <a href="https://twitter.com/vycke_" alt="Link to my Twitter page">
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
