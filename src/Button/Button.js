import React from 'react';
import './Button.css';

const Button = ({ primary, children, handleClick }) => {
  const bgColor = primary ? '#4682b4' : '#C0625E';

  return (
    <button
      className='add-button'
      type='button'
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
