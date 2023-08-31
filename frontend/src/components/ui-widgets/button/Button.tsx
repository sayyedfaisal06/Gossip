import React, { InputHTMLAttributes } from "react";
import "./button.css";

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "outline" | "text";
  variant?: "primary" | "secondary" | "error" | "success";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  variant = "primary",
  onClick,
  children,
  ...rest
}) => {
  const getButtonClassName = () => {
    let className = "button";

    if (type === "outline") {
      className += " outline";
    } else if (type === "text") {
      className += " text";
    }

    className += ` ${variant}`;
    return className;
  };

  return (
    <button className={getButtonClassName()} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
