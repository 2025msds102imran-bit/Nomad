import React from "react";

const Select = ({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-400 block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
