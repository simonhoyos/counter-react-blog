import React from 'react';
import './Button.css';

const Button = ({ primary, className, children }) => {
  const bgColor = primary ? '#4682b4' : '#C0625E';

  return (
    <button
      className={`add-button ${className}`}
      type='button'
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}

export default Button;
