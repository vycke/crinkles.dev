import React from 'react';
import Github from './Github';
import Twitter from './Twitter';

const ExternalProfiles = () => {
  return (
    <React.Fragment>
      <a href="https://twitter.com/kevtiq" alt="Link to my Twitter page">
        <Twitter />
      </a>
      <a href="https://github.com/kevtiq" alt="Link to my Github page">
        <Github />
      </a>
    </React.Fragment>
  );
};

export default ExternalProfiles;
