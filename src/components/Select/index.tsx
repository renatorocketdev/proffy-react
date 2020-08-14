// React
import React, { SelectHTMLAttributes } from 'react';

// Css
import './styles.css';

// Interface
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{ value: string, label: string }>;
}

// Component
const Select: React.FC<SelectProps> = ( { options, label, name, ...rest }) => {

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" className={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map(options => {
          return <option key={options.value} value={options.value}>{options.label}</option>
        })}
      </select>
  </div>
  );
}

// Export
export default Select