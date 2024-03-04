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
      <div className="header__logo">
        <div className="header__logo-wrapper">
          <img src={logo} alt="Logo" className="header__logotip" />
        </div>
      </div>
      <div className="header__inner">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <ul className="header__list">
                <li className="header__item">
                  <a className="header__link" to="/catalog">
                    Главная
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" to="/catalog">
                    Страницы
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" to="/catalog">
                    Портфолио
                  </a>
                </li>
              </ul>
              <ul className="header__list ">
                <li className="header__item">
                  <a className="header__link" to="/catalog">
                    Блог
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" to="/catalog">
                    Магазин
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" to="/catalog">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div class="header__right">
              <div class="header__barList">
                <a class="headerMenu__barList-icon" title="View your shopping cart">
                  {/* <img className="bag" src={bag} /> */}
                  <Svg name={'bag'} width={50} height={40} stroke={'black'} fill={'none'} />
                </a>
              </div>
              <div class="headerMenu__searchButton">
                {/* <img className="search" src={search} /> */}
                <Svg name={'search'} width={50} height={40} fill={'black'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
