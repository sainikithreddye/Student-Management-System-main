import React from 'react';
import './Switch.css';

/**
 * Switch Component
 * Modern toggle switch for boolean inputs
 */
const Switch = ({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className = '',
  ...props
}) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`switch-group ${className}`}>
      <label htmlFor={switchId} className="switch-label">
        <input
          type="checkbox"
          id={switchId}
          className="switch-input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          role="switch"
          aria-checked={checked}
          {...props}
        />
        <span className="switch-slider" aria-hidden="true" />
        {label && <span className="switch-label-text">{label}</span>}
      </label>
    </div>
  );
};

export default Switch;

