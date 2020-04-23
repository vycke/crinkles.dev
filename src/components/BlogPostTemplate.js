import React from 'react';
import { formatReadingTime } from '../utils/readingTime';
import TagList from './TagList';
import logoDark from '../img/logo-dark.svg';
import logoLight from '../img/logo-light.svg';
import { AppContext } from './Context';

const BlogPostTemplate = ({ meta, children }) => {
  const { theme } = React.useContext(AppContext);
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
      <div className="divider">
        <img
          src={theme === 'dark' ? logoDark : logoLight}
          alt="Kevtiq logo used by Kevin Pennekamp"
          className="logo__img"
        />
      </div>
    </article>
  );
};

export default BlogPostTemplate;
