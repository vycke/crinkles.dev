import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({ next, prev }) {
  if (!next && !prev) return null;
  return (
    <section className="pagination">
      {!next && prev && <div />}
      {next && (
        <Link to={next.link}>
          <h3 className="next">{next.title}</h3>
        </Link>
      )}
      {prev && (
        <Link to={prev.link}>
          <h3 className="previous">{prev.title}</h3>
        </Link>
      )}
    </section>
  );
}
