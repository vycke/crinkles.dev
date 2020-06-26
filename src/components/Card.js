import React from 'react';

const Card = ({
  post,
  title = '',
  variant,
  subtitle,
  meta,
  category,
  url,
  reverse,
  className = '',
  orientation = 'vertical',
}) => {
  let classes = `card card--${orientation}`;
  if (variant) classes += ` card--${variant}`;

  console.log(category);

  return (
    <section className={`${classes} ${className}`} role="article">
      {category && (
        <img
          className="card__image"
          src={`../../img/headers/${category}.png`}
          alt="Featured of this card"
        />
      )}
      <div className="card__content">
        {meta && <span className="card__meta">{meta}</span>}
        <a href={url} className="card__title">
          <h2>{title}</h2>
        </a>

        {subtitle && <span className="card__subtitle">{subtitle}</span>}
      </div>
    </section>
  );
};

export default Card;
