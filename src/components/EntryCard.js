import React from 'react';
import { formatReadingTime } from '../utils/readingTime';
import TagList from './TagList';
import excerpt from '../utils/excerpt';

const Card = ({
  post,
  showTags = true,
  showDescription = true,
  showImage = false
}) => {
  console.log(post);

  return (
    <section className="card" role="article">
      {showImage && (
        <img
          className="card__image"
          src={`../../img/${post.frontmatter.featuredImage}`}
          alt="Featured of this blogpost"
        />
      )}
      <div className="card__content">
        <a href={post.fields.slug} className="card__title">
          {post.frontmatter.title || ''}
        </a>
        <span className="card__subtitle">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          {` • ${formatReadingTime(post.wordCount.words)}`}
        </span>
        {showTags && (
          <TagList
            className="card__tags"
            tags={post.frontmatter.tags}
            max={3}
          />
        )}
        {showDescription && (
          <p className="entry__description">
            {excerpt(post.frontmatter.description || '')}
          </p>
        )}
      </div>
    </section>
  );
};

export default Card;
