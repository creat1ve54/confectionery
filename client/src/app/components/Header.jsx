import React from "react";
import { Link, NavLink } from "react-router-dom";
import Svg from "../../assets/svg/Svg";

import Deliver from "../../assets/svg/delivery.png";

const Header = () => {
  const links = [
    "Новинки",
    "Сноуборд",
    "Лыжи",
    "Скейт",
    "Лонгборд",
    "Вейкборд",
    "Серф",
    "Одежда",
    "Обувь",
    "Аксессуары",
    "Бренды",
    "Распродажа",
  ];

  return (
    <div className="header">
      <div className="header__up">
        <div className="header__up-left">
          <div className="header__up-left-geolacation">
            {/* <img src={Deliver} alt="Delivery" /> */}
            <Svg name="icon-geolocation" color="" width={14} height={20}></Svg>
            Ваш регион доставки:
            <div className="">
              <span>Москва</span>
              {/* <ul className="">
              <li>Москва</li>
            </ul> */}
            </div>
          </div>
          <nav className="header__up-left-navigation">
            <NavLink  className='header__up-left-navigation-link body-4-capital' to={'/storage'}>Магазины</NavLink>
            <NavLink className='header__up-left-navigation-link' to={'/help'}>Помощь</NavLink>
            <NavLink className='header__up-left-navigation-link' to={'/blog'}>Блоги</NavLink>
          </nav>
        </div>
        <div className="header__up-right"></div>
      </div>
      <div className="header__center">
        <div className="header__center-left"></div>
        <div className="header__center-logo"></div>
        <div className="header__center-right"></div>
      </div>
      <div className="header__down">
        <ul className="header__down-list">
          {links.map((link, index) => {
            return (
              <li className="header__down-item" key={index}>
                <Link className="header__down-item-link">{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
