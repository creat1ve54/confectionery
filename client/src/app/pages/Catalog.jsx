import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import {
  getCardsThunk,
  filterCardsThunk,
  getAllThunk,
} from "../../redux/cards/cardsSlice";
import { useDispatch } from "react-redux";
import { convector, useAppSelector } from "../../redux/hooks";
import StarRatings from "react-star-ratings";
import Select from "../UI/Select";
import Input from "../UI/Input";
import Pagination from "../components/Pagination";
import MainBanner from "../components/MainBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Catalog = () => {
  const { cards, tags, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([
    "По умолчанию",
    "По возврастанию",
    "По убыванию",
  ]);
  const [filterActive, setFilterActive] = useState("По умолчанию");

  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  const lastItemsIndex = limit * page;
  const firstItemsIndex = lastItemsIndex - limit;

  let copyCards = cards.map((card) => ({ ...card }));
  let currentItems;
  let [, setFake] = useState();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;

  if (cards && cards.length > 0) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartResult = 0;
    let newCart = [];
    if (cart && cart.length > 0) {
      newCart = cart.filter((el) => {
        return cards.some((card) => {
          return el.id === card.id;
        });
      });

      newCart.forEach((el) => {
        cartResult = cartResult + el.count * el.price;
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    localStorage.setItem("cartResult", JSON.stringify(cartResult));

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart) {
      copyCards.forEach((card) => {
        cart.forEach((item) => {
          if (item.id === card.id) {
            card.cart = item.cart;
            card.count = item.count;
          }
        });
      });
    }
    currentItems = copyCards.slice(firstItemsIndex, lastItemsIndex);
  }

  let [tagsArray, setTagsArray] = useState([]);
  const clickSelect = (active) => {
    setFilterActive(active);

    dispatch(
      filterCardsThunk({
        text: search,
        tags: tagsArray,
        sort: active,
      })
    );
  };

  const searchCard = (e) => {
    setSearch(e.target.value);
    let search = e.target.value;

    dispatch(
      filterCardsThunk({
        text: search,
        tags: tagsArray,
        sort: filterActive,
      })
    );
  };

  const onAddCart = useCallback((card) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;
    cart.push(card);
    card.cart = true;
    card.count = 1;

    cartResult = cartResult + card.count * card.price;

    // debugger
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartResult", JSON.stringify(cartResult));
    currentItems = copyCards.slice(firstItemsIndex, lastItemsIndex);
    setFake({});
  }, []);

  const tagClick = (id, checked) => {
    let newArray;

    if (checked) {
      tagsArray.push(id);
    } else {
      newArray = tagsArray.filter((item) => {
        return item !== id;
      });
      tagsArray = newArray;
      setTagsArray(newArray);
    }

    dispatch(
      filterCardsThunk({
        text: search,
        tags: tagsArray,
        sort: filterActive,
      })
    );
  };

  const onChangeCount = (change, id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;
    let newCard = cart;

    if (change === "add") {
      newCard.forEach((el) => {
        if (el.id === id) {
          cartResult = Number(cartResult) + Number(el.price);
          el.count = el.count + 1;
        }
      });
    } else {
      newCard.forEach((el) => {
        if (el.id === id) {
          cartResult = cartResult - el.price;
          el.count = el.count - 1;
        }
        if (el.count === 0) {
          newCard = cart.filter((item) => item.id !== id);
          localStorage.removeItem("cart");
        }
      });
    }

    localStorage.setItem("cartResult", JSON.stringify(cartResult));
    localStorage.setItem("cart", JSON.stringify(newCard));
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

  useEffect(() => {
    dispatch(getCardsThunk());
    dispatch(getAllThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="catalog">
        <MainBanner name={"Каталог"} />
        <div className="catalog__case">
          <div className="container">
            <div className="catalog__header">
              <div className="catalog__count">
                Всего товаров {cards ? cards.length : ""}
              </div>
              <Select
                active={filterActive}
                items={filter}
                setActive={setFilterActive}
                onClick={clickSelect}
              />
            </div>
            <div className="catalog__container">
              <div className="catalog__left">
                <div className="catalog__main">  
                  <div className="catalog__items">
                    {currentItems?.map((card) => (
                      <div key={card.id} className="card">
                        <div className="card__img">
                          {card.cart ? (
                            <div>
                              <div className="card__btn card__btn--cart">
                                <button
                                  onClick={() => onChangeCount("remove", card.id)}
                                >
                                  {" "}
                                  -
                                </button>
                                {card.count}
                                <button
                                  onClick={() => onChangeCount("add", card.id)}
                                >
                                  {" "}
                                  +
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                onAddCart(card);
                              }}
                              className="card__btn"
                            >
                              Добавить в корзину
                            </button>
                          )}
                          {card.priceSale !== 0 && (
                            <div className="card__sale">Скидка!</div>
                          )}
                          <Link
                            className="card__link-img"
                            to={`/card-detail/${card.cardNameTranslate}`}
                          >
                            {card.photos.length > 0 ? (
                              <img
                                src={`http://localhost:8000/${card.photos[0]}`}
                                alt="Photos"
                              />
                            ) : (
                              <img
                                src={require("../../assets/images/not-photo.jpg")}
                                alt="Photos"
                              />
                            )}
                          </Link>
                        </div>
                        <div className="card__info">
                          <Link
                            className="card__title"
                            to={`/card-detail/${card.cardNameTranslate}`}
                          >
                            {card.cardName}
                          </Link>
                          <div className="card__prices">
                            {card.priceSale !== 0 && (
                              <div
                                className={
                                  "card__price " +
                                  (card.priceSale !== 0
                                    ? "card__price--sale"
                                    : "")
                                }
                              >
                                {convector(card.priceSale)}
                              </div>
                            )}
                            <div>{convector(card.price)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Pagination
                  page={limit}
                  totalItems={cards ? cards.length : 0}
                  changePage={setPage}
                />
              </div>
              <div className="catalog__right">
                <div className="catalog__search">
                  <Input
                    value={search}
                    setValue={setSearch}
                    placeholder="Поиск"
                    type="input"
                    onChange={searchCard}
                  />
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
                                {cart.photos.length > 0 ? (
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
                      <Link to="/cart" className="btn btn--brown">
                        Перейти в корзину
                      </Link>
                    </div>
                  )}
                  {cart.length > 4 ? <Link to="/cart" className="cart__more btn btn--pink">Показать все</Link> : ""}
                </div>
                <div className="catalog__tags border-custom">
                  <ul className="catalog__tags-list">
                    {tags.map((tag) => (
                      <li key={tag.id} className="catalog__tags-item">
                        <label className="tag">
                          <input
                            onChange={(e) => {
                              tagClick(tag.id, e.target.checked);
                            }}
                            name="tagCard"
                            type="checkbox"
                            value={tag.tag}
                          />
                          <span>{tag.tag}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Catalog;
