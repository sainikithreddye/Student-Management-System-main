import React from 'react';
import './Alert.css';

/**
 * Alert Component
 * Modern alert/notification component with variants
 */
const Alert = ({
  children,
  variant = 'info',
  title,
  icon,
  onClose,
  className = '',
  ...props
}) => {
  const classes = [
    'alert',
    `alert--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert" {...props}>
      <div className="alert__content">
        {icon && (
          <span className="alert__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="alert__body">
          {title && <div className="alert__title">{title}</div>}
          <div className="alert__message">{children}</div>
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          className="alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;

