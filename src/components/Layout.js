import React from 'react';
import Header from './Header';
import Github from './Github';
import Twitter from './Twitter';

import '../styles/styles.scss';
import 'prism-theme-night-owl';
import SEO from './SEO';

const PageWrapper = ({ children, meta }) => {
  return (
    <React.Fragment>
      <SEO {...meta} />
      <div className="container">
        <Header />
        {children}
        <footer>
          <a href="https://twitter.com/kevtiq" alt="Link to my Twitter page">
            <Twitter />
          </a>
          <a href="https://github.com/kevtiq" alt="Link to my Github page">
            <Github />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

PageWrapper.defaultProps = {
  className: '',
  footer: false,
  meta: {}
};

export default PageWrapper;
