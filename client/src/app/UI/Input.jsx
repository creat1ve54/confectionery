import React from "react";

const Input = ({ setValue, value, placeholder }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

export default Input;
