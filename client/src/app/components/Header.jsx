import React from 'react';
import { Link, a } from 'react-router-dom';
import Svg from '../../assets/svg/Svg';
import logo from '../../assets/images/Bellaria_logo.png';
import bag from '../../assets/svg/bag.svg';
import search from '../../assets/svg/search.svg';

import Deliver from '../../assets/svg/delivery.png';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="headerMain">
            <ul className="header__list header__list-left">
              <li className="header__item header__item-left">
                <a className="header__linkLeft" to="/catalog">
                  Главная
                </a>
              </li>
              <li className="header__item header__item-left">
                <a className="header__linkLeft" to="/catalog">
                  Страницы
                </a>
              </li>
              <li className="header__item header__item-left">
                <a className="header__linkLeft" to="/catalog">
                  Портфолио
                </a>
              </li>
            </ul>
            <div className="header__logo">
              <div className="header__logo-wrapper">
                <img src={logo} alt="Logo" className="header__logotip" />
              </div>
            </div>
            <ul className="header__list header__list-right">
              <li className="header__item header__item-right">
                <a className="header__linkRight" to="/catalog">
                  Блог
                </a>
              </li>
              <li className="header__item header__item-right">
                <a className="header__linkRight" to="/catalog">
                  Магазин
                </a>
              </li>
              <li className="header__item header__item-right">
                <a className="header__linkRight" to="/catalog">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div class="headerMenu">
            <div class="headerMenu__barList">
              <div class="headerMenu__barList-basket">
                <div class="basket__wrapper">
                  <p class="basket__wrapper-message">No products in the cart.</p>
                </div>
              </div>
              <a class="headerMenu__barList-icon" title="View your shopping cart">
                <img className="bag" src={bag} />
              </a>
            </div>
            <div class="headerMenu__searchButton">
              <img className="search" src={search} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
