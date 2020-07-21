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
            className="icon logo">
            <svg
              viewBox="0 0 251 201"
              fill="currentcolor"
              aria-label="Logo that redirects to the homepage"
              color="neutral.1"
              display="block">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M245.643 30.5644C242.292 23.061 237.04 16.2803 230 11C229.763 10.8221 229.524 10.6466 229.285 10.4735C227.979 9.52838 226.626 8.64474 225.23 7.82693C210.738 -0.665967 193.312 -1.08938 178.753 5.72784C172.169 8.81075 166.172 13.3744 161.298 19.3422C154.236 27.9636 149.999 38.9874 149.999 51.0007C149.999 51.083 150 51.1651 150 51.2473V100.999L90.0008 21.0021C73.4327 -1.08835 42.0933 -5.56531 20.0025 11.0025C-2.0884 27.5703 -6.56544 58.909 10.0027 80.9994L85.0009 180.995C86.3941 182.852 87.8917 184.585 89.4794 186.192C96.5438 193.34 105.393 197.983 114.77 199.939C116.589 200.32 118.435 200.6 120.3 200.776C131.944 201.879 144.009 198.925 154.203 191.585C154.816 191.144 155.42 190.688 156.014 190.219C159.793 187.234 163.029 183.805 165.703 180.063L240 81.0024C240.257 80.6603 240.508 80.3155 240.755 79.9683C242.07 78.1223 243.262 76.1831 244.32 74.1627C248.909 65.4069 250.671 55.7141 249.779 46.2965C249.26 40.7381 247.831 35.4439 245.643 30.5644ZM145.259 165.655L145 166C144.448 166.735 143.861 167.436 143.24 168.098C142.262 169.139 141.181 170.109 140 170.995C138.887 171.83 137.728 172.558 136.533 173.18C133.625 174.692 130.421 175.631 127.097 175.91C123.755 176.188 120.388 175.792 117.208 174.752C112.643 173.254 108.556 170.455 105.491 166.627C105.326 166.421 105.163 166.212 105.003 165.999L30.0052 66.003C29.8289 65.768 29.6574 65.5309 29.4906 65.2918C26.2586 60.6531 24.7478 55.1397 25.0406 49.6648C25.134 47.9396 25.4052 46.227 25.8499 44.5565C26.2812 42.9411 26.8786 41.3553 27.6443 39.8238C29.2425 36.6276 31.4704 33.8756 34.1341 31.6878C34.418 31.4549 34.7084 31.2271 35.0051 31.0046C35.1988 30.8593 35.3939 30.7172 35.5904 30.5784C39.7305 27.6574 44.7406 26.0054 50.0018 26.0048V26.0004C55.3417 26.0045 60.6345 27.7129 65.0122 31.0016C65.9455 31.7025 66.8363 32.4751 67.678 33.3184C68.5031 34.1452 69.2802 35.0399 70.0013 36.0014L145 135.997C148.327 140.434 149.957 145.616 150 150.767V151C149.995 156.196 148.377 161.348 145.259 165.655ZM225.001 51C225.005 56.2261 223.377 61.4973 220 66L175 126V51H174.999C174.999 45.4833 176.786 40.384 179.813 36.2493L180 36C180.276 35.6321 180.56 35.274 180.852 34.9257C184.947 30.0539 190.867 26.7674 197.559 26.1194C198.361 26.0416 199.175 26.0018 199.998 26.0018C207.964 26.0018 215.059 29.7272 219.637 35.5308C220.677 36.85 221.592 38.2854 222.361 39.8239C223.334 41.7699 224.035 43.8038 224.469 45.8744C224.617 46.5812 224.734 47.2941 224.821 48.0108C224.938 48.9909 224.998 49.9884 224.998 51H225.001Z"
              />
            </svg>
            {title && <span className="secondary"> {` /${title}`}</span>}
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
        </header>

        {children}

        <footer className="footer">
          <span>© 2020 by Vycke.</span>
          <a href="https://twitter.com/vycke_" alt="Link to my Twitter page">
            twitter
          </a>
          <a href="https://github.com/vycke" alt="Link to my Github page">
            github
          </a>
          <a href="https://dribbble.com/vycke" alt="Link to my Dribbble page">
            dribbble
          </a>
          <a
            href="https://dev.to/vycke"
            alt="Link to my the Practical Dev profile page">
            dev.to
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
