import React from "react";

const variants = {
  primary: "bg-[#25406A] text-white hover:bg-cyan-950",
  secondary: "bg-white text-cyan-900 outline-[1.27px] outline-cyan-900 ",
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
