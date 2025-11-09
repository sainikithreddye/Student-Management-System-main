import React from 'react';
import './Card.css';

/**
 * Card Component
 * Modern card container with optional header and footer
 */
const Card = ({
  children,
  title,
  subtitle,
  header,
  footer,
  hover = false,
  className = '',
  ...props
}) => {
  const classes = [
    'card',
    hover && 'card--hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {(title || subtitle || header) && (
        <div className="card__header">
          {header || (
            <>
              {title && <h3 className="card__title">{title}</h3>}
              {subtitle && <p className="card__subtitle">{subtitle}</p>}
            </>
          )}
        </div>
      )}
      <div className="card__body">
        {children}
      </div>
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;

