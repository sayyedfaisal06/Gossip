import React, { InputHTMLAttributes, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email" | "number";
  showLabel?: boolean;
  labelText?: string;
  borderType?: "outline" | "bottom";
  customError?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  showLabel = true,
  labelText = "",
  borderType = "outline",
  customError = false,
  error = "",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input-container">
      {showLabel && <label>{labelText}</label>}
      <div className="input-wrapper">
        <input
          type={showPassword ? "text" : type}
          className={`input ${borderType}`}
          style={{ borderColor: customError ? "red" : "#ccc" }}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            className="toggle-password-button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </button>
        )}
      </div>
      {customError && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
