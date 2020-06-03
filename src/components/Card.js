import React from 'react';

const Card = ({
  post,
  title = '',
  variant,
  subtitle,
  meta,
  tags,
  image,
  url,
  reverse,
  className = '',
  orientation = 'vertical'
}) => {
  let classes = `card card--${orientation}`;
  if (variant) classes += ` card--${variant}`;

  return (
    <section className={`${classes} ${className}`} role="article">
      {image && (
        <img
          className="card__image"
          src={`../../img/${image}`}
          alt="Featured of this card"
        />
      )}
      <div className="card__content">
        <a href={url} className="card__title">
          <h2>{title}</h2>
        </a>
        {subtitle && <span className="card__subtitle">{subtitle}</span>}
        {meta && <span className="card__meta">{meta}</span>}
      </div>
    </section>
  );
};

export default Card;
