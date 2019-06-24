import React from 'react';
import { string2html } from '../utils/string2html';
import { formatReadingTime } from '../utils/readingTime';
import TagList from './TagList';

const BlogPostTemplate = ({ meta, children }) => {
  const content =
    typeof children === 'string' ? string2html(children) : children;

  return (
    <main className="post">
      <article>
        <section className="post__header" role="contentinfo">
          <h1>{meta.title}</h1>
          <span>
            <time dateTime={meta.date}>{meta.date}</time>
            {` • ${formatReadingTime(meta.words)}`}
          </span>
          {meta.tags && meta.tags.length > 0 && <TagList tags={meta.tags} />}
        </section>

        <section className="post__body">{content}</section>
      </article>
    </main>
  );
};

export default BlogPostTemplate;
