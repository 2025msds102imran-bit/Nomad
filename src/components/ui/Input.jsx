import React from "react";

const sizeStyles = {
  md: {
    label: "block mb-2 text-sm font-medium text-slate-900",
    input: "bg-white text-gray-900 text-sm rounded-xl outline-[1.27px] outline-gray-200 focus:outline-gray-400 block w-full px-4 py-3",
  },
  sm: {
    label: "block mb-1.5 text-xs font-medium text-slate-900",
    input: "bg-white text-gray-900 text-xs rounded-[10px] outline-[1.07px] outline-gray-200 focus:outline-gray-400 block w-full h-10 px-3.5 py-2.5",
  },
};

const Input = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
  disabled = false,
  size = "md",
  className = "",
  ...props
}) => {
  const styles = sizeStyles[size] || sizeStyles.md;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={styles.label}>
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
        className={`${styles.input} disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
