import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Svg from "../../assets/svg/Svg";
import logo from "../../assets/images/Bellaria_logo.png";
import logoMobile from "../../assets/images/logo-mobile.png";
import { convector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { getCardsThunk } from "../../redux/cards/cardsSlice";
import { fakeCart } from "../../redux/cart/cartSlice";
const Header = ({ fake }) => {
  const dispatch = useDispatch();
  const [, setFake] = useState("");

  const [burger, setBurger] = useState(false);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;
  const deleteItemCart = (cartItem) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let newCart = [];
    let cartResult = 0;

    if (cart.length > 0) {
      cart.forEach((el) => {
        if (el.id !== cartItem.id) {
          newCart.push(el);
          cartResult = cartResult + el.count * el.price;
        }
      });
    }

    dispatch(getCardsThunk());
    setFake();
    if (fake) {
      fake();
    }

    localStorage.setItem("cartResult", JSON.stringify(cartResult));
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="header">
      <div className="header--desctop">
        <div className="header__logo">
          <div className="header__logo-wrapper">
            <NavLink to={"/"}>
              <img src={logo} alt="Logo" className="header__logotip" />
            </NavLink>
          </div>
        </div>
        <div className="header__cart">
          <button className="header__cart-btn">
            <Svg
              name={"bag"}
              width={50}
              height={40}
              stroke={"black"}
              fill={"none"}
            />
            {cart.length > 0 && (
              <div className="header__cart-count">{cart.length}</div>
            )}
          </button>

          <div className="header__cart-container">
            {cart && cart.length > 0 ? (
              <>
                {cart.map((cart, index) =>
                  index < 5 ? (
                    <div className="cart__item" key={cart.id}>
                      <div className="cart__item-case">
                        <div className="cart__item-left">
                          {cart.photos.length > 1 ? (
                            <img
                              width={100}
                              height={100}
                              src={`http://localhost:8000/${cart.photos[0]}`}
                              alt="Photos"
                            />
                          ) : (
                            <img
                              width={100}
                              height={100}
                              src={require("../../assets/images/not-photo.jpg")}
                              alt="Photos"
                            />
                          )}
                        </div>
                        <div className="cart__item-right">
                          <Link
                            className="cart__item-title"
                            to={`/card-detail/${cart.cardNameTranslate}`}
                          >
                            {cart.cardName}
                          </Link>
                          <div className="cart__item-price">
                            {cart.count}×{convector(cart.price)}
                          </div>
                        </div>
                      </div>
                      <div
                        className="cart__item-delete"
                        onClick={() => deleteItemCart(cart)}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )
                )}
                {cartResult !== 0 && (
                  <div className="cart__result">
                    <span>Итого:</span> {convector(cartResult)}
                  </div>
                )}
                {cart.length > 0 && (
                  <div className="cart__btn">
                    <Link to="/cart" className="btn btn--brown">
                      Перейти в корзину
                    </Link>
                  </div>
                )}
                {cart.length > 4 ? <Link to="/cart" className="cart__more btn btn--pink">Показать все</Link> : ""}
              </>
            ) : (
              "Корзина пустая!"
            )}
          </div>
        </div>
        <div className="header__inner">
          <div className="header__wrapper">
            <div className="header__left">
              <ul className="header__list">
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__link header__link--active"
                        : "header__link"
                    }
                    to="/"
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__link header__link--active"
                        : "header__link"
                    }
                    to="/catalog"
                  >
                    Каталог
                  </NavLink>
                </li>
              </ul>
              <ul className="header__list ">
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__link header__link--active"
                        : "header__link"
                    }
                    to="/about"
                  >
                    О нас
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "header__link header__link--active"
                        : "header__link"
                    }
                    to="/contact"
                  >
                    Контакты
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <div className="header__right">
              <div className="header__bar-list">
                <a href="##" className="header__bar">
                  <Svg
                    name={"bag"}
                    width={50}
                    height={40}
                    stroke={"black"}
                    fill={"none"}
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="header--mobile">
        <div className="header__inner">
          <div className="header__wrapper">
            <NavLink to={"/"}>
              <img src={logoMobile} alt="Logo" className="header__logotip" />
            </NavLink>
          </div>
        </div>
        <NavLink to={"/cart"} className="header__cart">
          <button className="header__cart-btn">
            <Svg
              name={"bag"}
              width={50}
              height={40}
              stroke={"black"}
              fill={"none"}
            />
            {cart.length > 0 && (
              <div className="header__cart-count">{cart.length}</div>
            )}
          </button>
          {/* <div className="header__cart-container">
            {cart && cart.length > 0 ? (
              <>
                {cart.map((cart, index) =>
                  index < 5 ? (
                    <div className="cart__item" key={cart.id}>
                      <div className="cart__item-case">
                        <div className="cart__item-left">
                          <img
                            width={100}
                            height={100}
                            src={`http://localhost:8000/${cart.photos[0]}`}
                            alt="Photos"
                          />
                        </div>
                        <div className="cart__item-right">
                          <NavLink 
                            className="cart__item-title"
                            to={`/card-detail/${cart.cardNameTranslate}`}
                          >
                            {cart.cardName}
                          </NavLink>
                          <div className="cart__item-price">
                            {cart.count}×{convector(cart.price)}
                          </div>
                        </div>
                      </div>
                      <div
                        className="cart__item-delete"
                        onClick={() => deleteItemCart(cart)}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )
                )}
                {cartResult !== 0 && (
                  <div className="cart__result">
                    <span>Итого:</span> {convector(cartResult)}
                  </div>
                )}
                {cart.length > 0 && (
                  <div className="cart__btn">
                    <NavLink  to="/cart" className="btn btn--brown">
                      Перейти в корзину
                    </NavLink>
                  </div>
                )}
                {cart.length > 4 ? <button>Показать все</button> : ""}
              </>
            ) : (
              "Корзина пустая!"
            )}
          </div> */}
        </NavLink>
        <button
          className={!burger ? "burger" : "burger burger--active"}
          onClick={() => {
            setBurger(!burger);
            document.querySelector("body").classList.toggle("body--active");
          }}
        >
          <div className="burger__container">
            <span></span>
          </div>
        </button>

        <div className={!burger ? "menu" : "menu menu--active"}>
          <div className="menu__container">
            <ul className="header__list">
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  to="/"
                >
                  Главная
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  to="/catalog"
                >
                  Каталог
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  to="/about"
                >
                  О нас
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  to="/contact"
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
