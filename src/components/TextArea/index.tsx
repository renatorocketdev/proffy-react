// React
import React, { InputHTMLAttributes } from 'react';

// Css
import './styles.css';

// Interface
interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

// Component
const TextArea: React.FC<TextAreaProps> = ( { label, name, ...rest }) => {

  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea className={name} {...rest} />
  </div>
  );
}

// Export
export default TextArea