// React
import React, { InputHTMLAttributes } from 'react';

// Interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// Component
const Input: React.FC<InputProps> = ( { label, name }) => {

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" className={name}/>
  </div>
  );
}

// Export
export default Input