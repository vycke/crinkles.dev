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
            {` • ${formatReadingTime(meta.words)} • `}
            <a
              href={`https://twitter.com/intent/tweet?text=${
                meta.title
              } by @kevtiq ${meta.tags.map((t) => `#${t}`).join(' ')} ${
                meta.url
              }`}>
              share on twitter
            </a>
          </span>
          {meta.tags && meta.tags.length > 0 && (
            <TagList className="tags" tags={meta.tags} />
          )}
        </section>

        <section className="post__body">{content}</section>
      </article>
    </main>
  );
};

export default BlogPostTemplate;
