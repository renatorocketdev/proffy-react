// React
import React, { InputHTMLAttributes } from 'react';

// Css
import './styles.css';

// Interface
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// Component
const Input: React.FC<InputProps> = ( { label, name, ...rest }) => {

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" className={name} {...rest} />
  </div>
  );
}

// Export
export default Input