import React from 'react';
import { Link } from 'gatsby';
import camelCase from '../utils/camelCase';

const TagList = ({ tags, className, max }) => {
  return (
    <ul className={`tags ${className}`}>
      {(tags || []).slice(0, max).map((t, i) => (
        <li key={i}>
          <Link key={i} to={`/tags/${camelCase(t)}`}>
            {t.toLowerCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TagList.defaultProps = {
  className: '',
  max: 100
};

export default TagList;
