import React from "react";
import { NavLink } from "react-router-dom";

const MainBanner = ({ name, links }) => {
  return (
    <div className="main-banner">
      <div className="main-banner__container">
        <h1 className="main-banner__title mb-10">{name}</h1>
        <nav className="breadcrumb">
          <NavLink to="/" className="breadcrumb__link">
            Главная
          </NavLink>
          {links && links.length > 0 &&
            links.map((link, index) => (
              <NavLink key={index} className="breadcrumb__link" to={link.href}>
                {link.name}
              </NavLink>
            ))}
          <div className="breadcrumb__link">{name}</div>
        </nav>
      </div>
    </div>
  );
};

export default MainBanner;
