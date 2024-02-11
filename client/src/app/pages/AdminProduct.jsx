import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { checkAdminThunk } from "../../redux/admin/adminSlice";
import { useDispatch } from "react-redux";
import {
  createCardThunk,
  getCardsThunk,
  filterCardsThunk,
} from "../../redux/cards/cardsSlice";
import { useForm } from "react-hook-form";
import { url } from "../../api/axios";
import Product from "../components/Product";
const AdminProduct = () => {
  const [search, setSearch] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameTranslate, setCardNameTranslate] = useState("");
  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(false);
  const [priceSale, setPriceSale] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("Кексы, Торты");
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [time, setTime] = useState(null);

  const { cards, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );

  const searchCard = (e) => {
    setSearch(e.target.value);
    let search = e.target.value;
    // if (!search) {
    //   search = "all";
    // }
    dispatch(
      filterCardsThunk({
        text: search,
        // tags: "",
        // sort: "",
      })
    );
    // if (time) {
    //   clearTimeout(time);
    // }
    // setTime(
    //   setTimeout(() => {
    //     try {
    //       dispatch(
    //         filterCardsThunk({
    //           text: search,
    //         })
    //       );
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }, 800)
    // );
  };

  useEffect(() => {
    dispatch(getCardsThunk());
  }, [dispatch]);

  return (
    <div className="admin-product">
      <div className="container">
        <div className="admin-product__header">
          <div className="admin-product__header-item">Товары</div>
          {/* <div className="admin-product__header-item">Спецификация</div>
              <div className="admin-product__header-item">Посты</div> */}
        </div>
        <div className="admin-product__main">
          <div className="admin-product__main-left ">
            <div className="">
              <Input
                value={search}
                setValue={setSearch}
                placeholder="Поиск"
                type="input"
                onChange={searchCard}
              />
            </div>
            {cards ? cards.map((card, index) => {
              return (
                <Link
                  to={`/admin-product/${card.cardNameTranslate}`}
                  key={index}
                  className="admin-product__main-item border-custom"
                >
                  {/* <img src={URL.createObjectURL(card.photos.split(',')[0])} alt="" /> */}
                  <img
                    src={`${url}${card.photos.split(",")[0]}`}
                    alt=""
                    style={{ width: "200px" }}
                  />
                  <div className="admin-product__main-item-title">
                    {card.cardName}
                  </div>
                </Link>
              );
            }): 'Товаров нет'}
          </div>
          <div className="admin-product__main-right">
            <div className="admin-product__main-add">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
