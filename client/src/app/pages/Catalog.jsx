import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getCardsThunk, filterCardsThunk } from "../../redux/cards/cardsSlice";
import { useDispatch } from "react-redux";
import { convector, useAppSelector } from "../../redux/hooks";
import StarRatings from "react-star-ratings";
import Select from "../components/Select";
import Input from "../UI/Input";
import Pagination from "../components/Pagination";
import MainBanner from "../components/MainBanner";
const Catalog = () => {
  const { cards, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );

  // let newCards;

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([
    "По умолчанию",
    "По возврастанию",
    "По убыванию",
    "По популярности",
  ]);
  const [filterActive, setFilterActive] = useState("По умолчанию");
  // const [time, setTime] = useState(null);

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  // let pages = 0;

  const lastItemsIndex = limit * page;
  const firstItemsIndex = lastItemsIndex - limit;
  let copyCards = cards.map((card) => ({ ...card }));
  // let [currentItems, setCurrentItems] = useState();
  let currentItems;
  let [, setFake] = useState();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // console.log(newCards);

  // console.log(cards);

  // if (cards.length > 0) {
  // console.log(cards);
  // pages = Math.ceil(cards.length / limit);
  // newCards = currentItems;
  // console.log(newCards);
  // }

  if (cards) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
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
    // setCurrentItems(copyCards.slice(firstItemsIndex, lastItemsIndex));
    currentItems = copyCards.slice(firstItemsIndex, lastItemsIndex);
  }

  let [tags, setTags] = useState([]);
  const clickSelect = (active) => {
    setFilterActive(active);

    dispatch(
      filterCardsThunk({
        text: search,
        tags,
        sort: active,
      })
    );
  };

  const searchCard = (e) => {
    setSearch(e.target.value);
    let search = e.target.value;
    // if (time) {
    //   clearTimeout(time);
    // }

    dispatch(
      filterCardsThunk({
        text: search,
        tags,
        sort: filterActive,
      })
    );

    // setTime(
    //   setTimeout(() => {
    //     try {
    //       dispatch(
    //         filterCardsThunk({
    //           text: search,
    //           tags,
    //           sort: filterActive,
    //         })
    //       );
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }, 800)
    // );
  };

  const onAddCart = useCallback((card) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(card);
    card.cart = true;
    card.count = 1;
    // console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    // copyCards.forEach((card) => {
    //   cart.forEach((item) => {
    //     if (item.id === card.id) {
    //       card.cart = true;
    //     } else {
    //       card.cart = false;
    //     }
    //   });
    // });
    // setCurrentItems(copyCards.slice(firstItemsIndex, lastItemsIndex));
    currentItems = copyCards.slice(firstItemsIndex, lastItemsIndex);
    setFake({});
  }, []);

  const tagClick = (text, checked) => {
    let newArray;
    if (checked) {
      tags.push(text);
    } else {
      newArray = tags.filter((item) => {
        return item !== text;
      });

      tags = newArray;
      setTags(newArray);
    }

    dispatch(
      filterCardsThunk({
        text: search,
        tags,
        sort: filterActive,
      })
    );
  };

  const onChangeCount = (change, id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let newCard = cart;
    // let newCard = cart.filter((item) => item.id === id);
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(newCard);
    if (change === "add") {
      newCard.forEach((el) => {
        if (el.id === id) {
          el.count = el.count + 1;
        }
      });
    } else {
      newCard.forEach((el) => {
        if (el.id === id) {
          el.count = el.count - 1;
        }
        if (el.count === 0) {
          newCard = cart.filter((item) => item.id !== id);
          localStorage.removeItem("cart");
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(newCard));
    setFake({});
  };

  useEffect(() => {
    dispatch(getCardsThunk());
  }, [dispatch]);

  return (
    <section className="catalog">
      <MainBanner name={"Каталог"} />
      <div className="catalog__container">
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
              <div className="catalog__items">
                {currentItems?.map((card) => (
                  <div key={card.id} className="card">
                    <div className="card__img">
                      {card.cart ? (
                        <div>
                          <div className="card__btn card__btn--cart">
                            <button
                              onClick={() => onChangeCount("add", card.id)}
                            >
                              {" "}
                              +
                            </button>
                            {card.count}
                            <button
                              onClick={() => onChangeCount("remove", card.id)}
                            >
                              {" "}
                              -
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
                        <img
                          src={`http://localhost:8000/${
                            card.photos.split(",")[0]
                          }`}
                          alt="Photos"
                        />
                      </Link>
                    </div>
                    <div className="card__info">
                      <Link
                        className="card__title"
                        to={`/card-detail/${card.cardNameTranslate}`}
                      >
                        {card.cardName}
                      </Link>
                      {card.rating !== 0 && (
                        <StarRatings
                          className="card__rating"
                          rating={card.rating}
                          starRatedColor="#ebba44"
                          // changeRating={(e) => {
                          //   console.log(e);
                          // }}
                          numberOfStars={5}
                          name="rating"
                          svgIconPath="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                          svgIconViewBox="0 0 24 24"
                          starDimension="12px"
                          starSpacing="0px"
                        />
                      )}

                      <div className="card__prices">
                        {card.priceSale !== 0 && (
                          <div
                            className={
                              "card__price " +
                              (card.priceSale !== 0 ? "card__price--sale" : "")
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

              <Pagination
                page={limit}
                totalItems={cards ? cards.length : 0}
                changePage={setPage}
              />
            </div>
            <div className="catalog__right">
              <Input
                value={search}
                setValue={setSearch}
                placeholder="Поиск"
                type="input"
                onChange={searchCard}
              />
              <div className="catalog__cart border-custom mb-30">
                <h3>Корзина</h3>
                {cart ? (
                  cart.map((cart, index) =>
                    index < 5 ? <div key={cart.id}>{cart.cardName}</div> : ""
                  )
                ) : (
                  <p>В корзине нет товаров.</p>
                )}
                {cart.length > 4 ? <button>Показать все</button> : ""}
              </div>
              <div className="catalog__tags border-custom">
                <ul className="catalog__tags-list">
                  <li className="catalog__tags-item">
                    <label className="tag">
                      <input
                        onChange={(e) => {
                          tagClick(e.target.value, e.target.checked);
                        }}
                        name="tagCard"
                        type="checkbox"
                        value="Торт"
                      />
                      <span>Торт</span>
                    </label>
                  </li>
                  <li className="catalog__tags-item ">
                    <label className="tag">
                      <input
                        onChange={(e) => {
                          tagClick(e.target.value, e.target.checked);
                        }}
                        name="tagCard"
                        type="checkbox"
                        value="Кекс"
                      />
                      <span>Кекс</span>
                    </label>
                  </li>
                  <li className="catalog__tags-item ">
                    <label className="tag">
                      <input
                        onChange={(e) => {
                          tagClick(e.target.value, e.target.checked);
                        }}
                        name="tagCard"
                        type="checkbox"
                        value="Печенье"
                      />
                      <span>Печенье</span>
                    </label>
                  </li>
                  <li className="catalog__tags-item ">
                    <label className="tag">
                      <input
                        onChange={(e) => {
                          tagClick(e.target.value, e.target.checked);
                        }}
                        name="tagCard"
                        type="checkbox"
                        value="Трубочки"
                      />
                      <span>Трубочки</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
