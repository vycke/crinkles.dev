import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({ next, prev }) {
  if (!next && !prev) return null;
  return (
    <section className="pagination">
      {!next && prev && <div />}
      {next && (
        <Link to={next.link}>
          <h2 className="next">{next.title}</h2>
        </Link>
      )}
      {prev && (
        <Link to={prev.link}>
          <h2 className="previous">{prev.title}</h2>
        </Link>
      )}
    </section>
  );
}
