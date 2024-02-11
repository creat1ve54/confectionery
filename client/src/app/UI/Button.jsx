import React from "react";

const Button = ({ text, type, onClick }) => {
  return (
    <button type={type} onClick={(e) => onClick(e)} className="btn-custom btn-custom__large">
      <span></span>
      {text}
      <span></span>
    </button>
  );
};

export default Button;
