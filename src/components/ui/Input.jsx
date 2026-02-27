import React from "react";

const Input = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
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
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-gray-400 block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
