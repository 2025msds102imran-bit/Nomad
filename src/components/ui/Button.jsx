import React from "react";

const variants = {
  primary: "bg-linear-to-r from-[#0F172A] to-[#334F90] text-white shadow-lg hover:shadow-xl",
  secondary: "bg-white text-[#0F172A] border border-gray-300 hover:bg-gray-50",
  outline: "bg-transparent border border-white text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-2xl",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "lg",
  fullWidth = false,
  disabled = false,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} font-medium transition duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
