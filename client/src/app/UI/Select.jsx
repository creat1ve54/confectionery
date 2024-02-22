import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Input from "./Input";

const Select = ({
  active,
  inputPlaceholder,
  inputValue,
  setInputValue,
  items,
  setActive,
  itemsKey,
  onClick,
  onKeyDown,
  onDelete,
}) => {
  return items && !onKeyDown ? (
    <Dropdown className="select">
      <Dropdown.Toggle>{active}</Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            className={
              "select__text" + (item === active ? " select__text--active" : "")
            }
            onClick={
              onClick
                ? () => {
                    onClick(item);
                  }
                : (e) => {
                    setActive(item);
                  }
            }
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Dropdown className="select">
      <Dropdown.Toggle>
        {active.id === 0 ? "Выберите тег" : active[`${itemsKey}`]}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Input
          value={inputValue}
          setValue={setInputValue}
          placeholder={inputPlaceholder}
          type="input"
          // onChange={itemChange}
          onKeyDown={onKeyDown}
        />
        {items &&
          items.map((item, index) => (
            <div key={index} className="select__item">
              <Dropdown.Item
                className={
                  "select__text" +
                  (item["id"] === active["id"] ? " select__text--active" : "")
                }
                onClick={
                  onClick
                    ? () => {
                        onClick(item);
                      }
                    : (e) => {
                        setActive(item);
                      }
                }
              >
                {item[`${itemsKey}`]}
              </Dropdown.Item>
              <button
                onClick={() => onDelete(item)}
                className="select__close"
              ></button>
            </div>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
