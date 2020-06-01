import React from 'react';

const Card = ({
  post,
  title = '',
  subtitle,
  meta,
  tags,
  image,
  url,
  reverse,
  className = '',
  orientation = 'v'
}) => {
  return (
    <section
      className={`card card--${orientation} ${className}`}
      role="article">
      {image && (
        <img
          className="card__image"
          src={`../../img/${image}`}
          alt="Featured of this card"
        />
      )}
      <div className="card__content">
        <a href={url} className="card__title">
          {title}
        </a>
        {subtitle && <span className="card__subtitle">{subtitle}</span>}
        {meta && <span className="card__meta">{meta}</span>}
      </div>
    </section>
  );
};

export default Card;
