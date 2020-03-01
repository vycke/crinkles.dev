import React from 'react';
import { formatReadingTime } from '../utils/readingTime';
import TagList from './TagList';

const BlogPostTemplate = ({ meta, children }) => {
  const twt = `${meta.title} by @kevtiq ${meta.url}`;

  return (
    <article className="post">
      <header className="post__header" role="contentinfo">
        <h1>{meta.title}</h1>
        <span className="post__meta">
          <time dateTime={meta.date}>{meta.date}</time>
          {` • ${formatReadingTime(meta.words)} • `}
          <a href={`https://twitter.com/intent/tweet?text=${twt}`}>
            share on twitter
          </a>
        </span>
        {meta.tags && meta.tags.length > 0 && (
          <TagList className="tags" tags={meta.tags} />
        )}
      </header>

      <section
        className="post__body"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </article>
  );
};

export default BlogPostTemplate;
