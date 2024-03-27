import React, { useEffect } from "react";
import IMask from "imask";

const Input = ({
  setValue,
  value,
  placeholder,
  valid,
  typeInput,
  type,
  onChange,
  onKeyDown,
  maskClass,
  maskOptions,
  mask,
}) => {
  useEffect(() => {
    if (mask) {
      const maskOpt = {
        mask: maskOptions,
      };
      document.querySelectorAll(`.${maskClass}`).forEach((item) => {
        if (item) {
          IMask(item, maskOpt);
        }
      });
    }
  });

  return (
    <>
      {typeInput == "textarea" ? (
        <textarea
          className="input"
          placeholder={placeholder}
          onInput={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          style={{ resize: "none" }}
          rows={5}
        />
      ) : onChange ? (
        <input
          type={type}
          className={maskClass ? "input " + maskClass : "input"}
          {...valid}
          placeholder={placeholder}
          onInput={onChange}
          onKeyDown={onKeyDown}
          value={value == 0 ? "" : value}
        />
      ) : (
        <input
          type={type}
          className={maskClass ? "input " + maskClass : "input"}
          {...valid}
          placeholder={placeholder}
          onInput={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
          value={value == 0 ? "" : value}
        />
      )}
    </>
  );
};

export default Input;
