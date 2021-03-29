import React from 'react';

const Card = ({
  post,
  title = '',
  subtitle,
  meta,
  category,
  url,
  className = '',
}) => {
  return (
    <div
      className={`card splitter splitter-w-1 click-area ${className}`}
      role="article">
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
    </div>
  );
};

export default Card;
