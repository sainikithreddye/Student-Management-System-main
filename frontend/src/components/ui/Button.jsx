import React from 'react';
import './Button.css';

/**
 * Button Component
 * Modern, accessible button with multiple variants and sizes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const widthClass = fullWidth ? 'btn--full-width' : '';
  const loadingClass = loading ? 'btn--loading' : '';
  
  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    widthClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="btn__spinner" aria-hidden="true" />
          <span className="btn__content">{children}</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="btn__icon btn__icon--left" aria-hidden="true">
              {icon}
            </span>
          )}
          <span className="btn__content">{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="btn__icon btn__icon--right" aria-hidden="true">
              {icon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;

