import React from 'react';
import { formatReadingTime } from '../utils/readingTime';
import TagList from './TagList';
import excerpt from '../utils/excerpt';

const PostOverview = ({ posts, tags }) => {
  return posts.map((p, i) => (
    <section key={i} className="card entry" role="article">
      <a href={p.node.fields.slug} className="entry__title">
        {p.node.frontmatter.title || ''}
      </a>
      <span className="entry__date">
        <time dateTime={p.node.frontmatter.date}>
          {p.node.frontmatter.date}
        </time>
        {` • ${formatReadingTime(p.node.wordCount.words)}`}
      </span>
      {tags && (
        <TagList
          className="entry__tags"
          tags={p.node.frontmatter.tags}
          max={3}
        />
      )}
      <p className="entry__description">
        {excerpt(p.node.frontmatter.description || '')}
      </p>
    </section>
  ));
};

PostOverview.defaultProps = {
  tags: false
};

export default PostOverview;
