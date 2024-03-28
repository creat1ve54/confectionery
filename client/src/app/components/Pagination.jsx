import React, { useState } from "react";

const Pagination = ({ page, totalItems, changePage }) => {
  const pageNumbers = [];

  const [active, setActive] = useState(1);

  for (let i = 1; i <= Math.ceil(totalItems / page); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.length > 1
        ? pageNumbers.map((number, index) => (
            <li key={index} className="pagination__item">
              <button
                onClick={() => {
                  changePage(number);
                  setActive(number);
                }}
                className={
                  active === number
                    ? "pagination__btn pagination__btn--active"
                    : "pagination__btn"
                }
              >
                {number}
              </button>
            </li>
          ))
        : ""}
    </ul>
  );
};

export default Pagination;
