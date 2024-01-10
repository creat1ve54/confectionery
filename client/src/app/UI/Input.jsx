import React from "react";

const Input = ({
  setValue,
  value,
  placeholder,
  valid,
  typeInput,
  type,
  onChange,
}) => {
  return (
    <>
      {typeInput == "textarea" ? (
        <textarea
          className="input"
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          style={{ resize: "none" }}
          rows={5}
        />
      ) : onChange ? (
        <input
          type={type}
          className="input"
          {...valid}
          placeholder={placeholder}
          onChange={onChange}
          value={value == 0 ? "" : value}
        />
      ) : (
        <input
          type={type}
          className="input"
          {...valid}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value == 0 ? "" : value}
        />
      )}
    </>
  );
};

export default Input;
