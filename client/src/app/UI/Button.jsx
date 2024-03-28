import React from "react";

const Button = ({ text, type, onClick, nameClass }) => {
  return (
    <button
      type={type}
      onClick={(e) => onClick(e)}
      className={
        nameClass
          ? "btn-custom btn-custom__large " + nameClass
          : "btn-custom btn-custom__large"
      }
    >
      <span></span>
      {text}
      <span></span>
    </button>
  );
};

export default Button;
