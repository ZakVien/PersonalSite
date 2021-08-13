import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ children, type, onClick, buttonSize, pageName }) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={`/${pageName}`} className="btn-mobile">
      <button
        className={`btn btn--primary ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
