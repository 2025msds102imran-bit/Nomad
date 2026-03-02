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
        <label htmlFor={id} className="block mb-1.5 text-xs font-medium text-slate-900">
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
        className={`bg-white text-gray-900 text-xs rounded-[10px] outline-[1.07px] outline-gray-200 focus:outline-gray-400 block w-full h-10 px-3.5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
