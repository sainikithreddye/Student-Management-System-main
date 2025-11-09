import React from 'react';
import './Loader.css';

/**
 * Loader Component
 * Modern loading spinner with size variants
 */
const Loader = ({ size = 'md', className = '', ...props }) => {
  const sizeClass = `loader--${size}`;
  const classes = ['loader', sizeClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status" aria-label="Loading" {...props}>
      <div className="loader__spinner" aria-hidden="true" />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;

