import { ButtonProps } from "@/types/types";
import React from "react";

const Button = (props: ButtonProps) => {
  const {
    type = "button",
    text,
    className,
    onClick,
    themeColor = "primary",
    size,
    icon,
  } = props;

  const renderThemeColor = () => {
    switch (themeColor) {
      case "primary":
        return "bg-primary text-gray-900";
      case "secondary":
        return "bg-secondary text-light";
      case "danger":
        return "bg-danger text-light";
      case "success":
        return "bg-success text-light";
      case "warning":
        return "bg-warning text-light";
      case "info":
        return "bg-info text-light";
      case "dark":
        return "bg-dark text-light";
      case "light":
        return "bg-light text-gray-900";
      default:
        return "bg-primary text-light";
    }
  };

  const renderSize = () => {
    switch (size) {
      case "sm":
        return "py-1 px-4";
      case "md":
        return "py-3 px-5";
      case "lg":
        return "py-4 px-6";
      default:
        return "py-3 px-5";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${renderThemeColor()} ${renderSize()} group  flex items-center justify-center gap-3 font-semibold rounded-lg hover:bg-opacity-80 transition duration-300 ease-in-out active:bg-opacity-50 ${className}`}
    >
      {text} {icon && <span className="group-hover:translate-x-1 duration-200">{icon}</span>}
    </button>
  );
};

export default Button;