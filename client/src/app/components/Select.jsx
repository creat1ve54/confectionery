import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Select = ({ active, items, setActive, onClick }) => {
  return (
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
  );
};

export default Select;
