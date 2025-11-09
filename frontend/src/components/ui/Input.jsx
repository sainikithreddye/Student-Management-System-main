import React from 'react';
import './Input.css';

/**
 * Input Component
 * Modern, accessible form input with label and error states
 */
const Input = ({
  label,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  required = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;
  
  const inputClasses = [
    'input',
    hasError && 'input--error',
    icon && `input--with-icon input--icon-${iconPosition}`,
    fullWidth && 'input--full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`input-group ${fullWidth ? 'input-group--full-width' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-label__required" aria-label="required">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {icon && iconPosition === 'left' && (
          <span className="input-icon input-icon--left" aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={hasError}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <span className="input-icon input-icon--right" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
      {error && (
        <div id={`${inputId}-error`} className="input-error" role="alert">
          {error}
        </div>
      )}
      {helperText && !error && (
        <div id={`${inputId}-helper`} className="input-helper">
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;

