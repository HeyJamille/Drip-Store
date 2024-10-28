import React from 'react';

const Button = ({ label }) => {
  return (
    <button 
      type="button" 
      className="w-full px-8 py-2 bg-primary text-white rounded-md"
    >
      {label}
    </button>
  );
}

export default Button;
