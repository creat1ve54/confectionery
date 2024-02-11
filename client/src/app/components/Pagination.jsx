import React from "react";

const Pagination = ({ page, totalItems, changePage }) => {
  const pageNumbers = [];

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
                }}
                className="pagination__btn"
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
