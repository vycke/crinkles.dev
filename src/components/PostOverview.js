import React from 'react';
import { formatReadingTime } from '../utils/readingTime';
import TagList from './TagList';

const PostOverview = ({ posts, tags }) => {
  return posts.map((p, i) => (
    <section key={i} className="card entry" role="article">
      <a href={p.node.fields.slug} className="entry__title">
        <h2>{p.node.frontmatter.title || ''}</h2>
      </a>
      <span className="entry__date">
        <time dateTime={p.node.frontmatter.date}>
          {p.node.frontmatter.date}
        </time>
        {` • ${formatReadingTime(p.node.wordCount.words)}`}
      </span>
      {tags && <TagList tags={p.node.frontmatter.tags} max={3} />}
      <p className="entry__description">{p.node.excerpt || ''}</p>
    </section>
  ));
};

PostOverview.defaultProps = {
  tags: false
};

export default PostOverview;
