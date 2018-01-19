import React from 'react';
import './Button.css';

const Button = (props) => {
  const bgColor = props.primary ? '#4682b4' : '#C0625E';

  return (
    <button
      className={`add-button ${props.className}`}
      type='button'
      style={{ backgroundColor: bgColor }}
    >
      {props.children}
    </button>
  );
}

export default Button;
