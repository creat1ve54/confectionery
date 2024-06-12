import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { convector, useAppSelector } from "../../redux/hooks";
import { getAllThunk, getCardThunk } from "../../redux/cards/cardsSlice";
import MainBanner from "../components/MainBanner";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CardDetail = () => {
  const params = useParams();
  const { cardNameTranslate } = params;
  const dispatch = useDispatch();
  const { card, tags, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );

  const [counter, setCounter] = useState(1);

  let [, setFake] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // console.log(card);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;

  let copyCard = { ...card };

  if (copyCard) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart && cart.length > 0) {
      cart.forEach((item) => {
        if (item.id === card.id) {
          copyCard.cart = item.cart;
          copyCard.count = item.count;
        }
      });
    }
  }

  const onChangeCount = (change) => {
    if (change === "add") {
      setCounter(counter + 1);
    } else {
      if (counter - 1 <= 0) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    }
  };

  const addCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;
    let newCart;
    let cartResult = 0;

    if (cart.length > 0) {
      newCart = cart.forEach((el) => {
        if (el.id === card.id) {
          el.count = el.count + counter;
          cartResult = cartResult + el.count * el.price;
        } else {
          cartResult = cartResult + el.count * el.price;
        }
      });
    } else {
      cart.push(copyCard);
      copyCard.cart = true;
      copyCard.count = copyCard.count + counter;
      cartResult = cartResult + copyCard.count * copyCard.price;
    }

    localStorage.setItem("cartResult", JSON.stringify(cartResult));
    localStorage.setItem("cart", JSON.stringify(cart));

    setFake({});
  };

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

    localStorage.setItem("cartResult", JSON.stringify(cartResult));
    localStorage.setItem("cart", JSON.stringify(newCart));

    setFake({});
  };

  console.log(card);

  useEffect(() => {
    dispatch(getCardThunk(cardNameTranslate));
    dispatch(getAllThunk());
  }, [dispatch, cardNameTranslate]);
  return (
    <>
      <Header />
      <section>
        <MainBanner
          name={card.cardName}
          links={[{ href: "/catalog", name: "Каталог" }]}
        />
        <div className="card-detail">
          <div className="container">
            <div className="card-detail__container">
              <div className="card-detail__case">
                <div className="card-detail__info">
                  <div className="card-detail__info-left">
                    {card.photos.length > 0 ? (
                      <>
                        {card.priceSale !== 0 && (
                          <div className="card-detail__sale">Скидка!</div>
                        )}
                        <Swiper
                          spaceBetween={10}
                          thumbs={{ swiper: thumbsSwiper }}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper2"
                        >
                          {card.photos &&
                            card.photos.map((photo, index) => (
                              <SwiperSlide key={index}>
                                <img
                                  src={`http://localhost:8000/${photo}`}
                                  width={200}
                                  height={200}
                                  alt="Photos"
                                />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          spaceBetween={10}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper"
                        >
                          {card.photos &&
                            card.photos.map((photo, index) => (
                              <SwiperSlide key={index}>
                                <img
                                  src={`http://localhost:8000/${photo}`}
                                  width={200}
                                  height={200}
                                  alt="Photos"
                                />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                      </>
                    ) : (
                      <img
                        width={200}
                        height={200}
                        src={require("../../assets/images/not-photo.jpg")}
                        alt="Photos"
                      />
                    )}
                  </div>
                  <div className="card-detail__info-right">
                    <div className="card-detail__info-right-up">
                      <div className="card-detail__info-title">
                        {card.cardName}
                      </div>
                      <div className="card-detail__info-prices">
                        {card.priceSale !== 0 && (
                          <div className="card-detail__info-price card-detail__info-price--old">
                            {convector(card.priceSale)}
                          </div>
                        )}
                        <div className="card-detail__info-price">
                          {convector(card.price)}
                        </div>
                      </div>
                    </div>
                    <div className="card-detail__info-right-bottom">
                      <div className="card-detail__info-counter">
                        <div className="card-detail__info-btn card-detail__info-btn--cart">
                          <div className="card__btn card__btn--cart">
                            <button
                              onClick={() => onChangeCount("remove", card.id)}
                            >
                              {" "}
                              -
                            </button>
                            {counter}
                            <button
                              onClick={() => onChangeCount("add", card.id)}
                            >
                              {" "}
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          className="card-detail__info-btn-add btn btn--brown"
                          onClick={() => addCart(card)}
                        >
                          Добавить в корзину
                        </button>
                      </div>
                      <ul className="card-detail__info-list">
                        <li className="card-detail__info-item">
                          <div className="card-detail__info-item-title">
                            Категория:
                          </div>
                          <div className="card-detail__info-item-text">
                            {card.category}
                          </div>
                        </li>
                        <li className="card-detail__info-item">
                          <div className="card-detail__info-item-title">
                            Тег:
                          </div>
                          <div className="card-detail__info-item-text">
                            {tags.map(
                              (tag) => tag.id === card.tagId && tag.tag
                            )}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-detail__bottom">
                  <div className="card-detail__bottom-title">
                    <span>Описание</span>
                  </div>
                  <div className="card-detail__bottom-description">
                    {card.description}
                  </div>
                </div>
              </div>
              <div className="catalog__cart cart border-custom mb-30">
                <h3 className="cart__title">Корзина</h3>
                <div className="cart__list">
                  {cart.length > 0 ? (
                    cart.map((cart, index) =>
                      index < 5 ? (
                        <div className="cart__item" key={cart.id}>
                          <div className="cart__item-case">
                            <div className="cart__item-left">
                              {cart.length > 1 ? (
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
                              <div className="cart__item-title">
                                <Link
                                  className="cart__item-title"
                                  to={`/card-detail/${cart.cardNameTranslate}`}
                                >
                                  {cart.cardName}
                                </Link>
                              </div>
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
                    )
                  ) : (
                    <p>В корзине нет товаров.</p>
                  )}
                </div>
                {cartResult !== 0 && (
                  <div className="cart__result">
                    <span>Итого:</span> {convector(cartResult)}
                  </div>
                )}
                {cart.length > 0 && (
                  <div className="cart__btn">
                    <Link to="/cart" className=" btn btn--brown">
                      Перейти в корзину
                    </Link>
                  </div>
                )}
                {cart.length > 4 ? (
                  <Link to="/cart" className="cart__more btn btn--pink">
                    Показать все
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CardDetail;
