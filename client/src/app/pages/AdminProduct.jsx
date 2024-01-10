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
  searchCardsThunk,
} from "../../redux/cards/cardsSlice";
import { useForm } from "react-hook-form";
import { url } from "../../api/axios";
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

  const { isAuth } = useAppSelector((state) => state.adminSlice);

  const { cards, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendForm = () => {
    try {
      const data = new FormData();
      data.append("cardName", cardName);
      data.append("price", price);
      data.append("priceSale", priceSale);
      data.append("tags", tags);
      data.append("category", category);
      data.append("description", description);
      data.append("count", count);
      for (let index = 0; index < photos.length; index++) {
        data.append("photos", photos[index]);
      }
      dispatch(createCardThunk(data));
    } catch (error) {
      console.log(error);
    }
  };

  const searchCard = (e) => {
    setSearch(e.target.value);
    let search = e.target.value;
    if (!search) {
      search = "all";
    }
    if (time) {
      clearTimeout(time);
    }
    setTime(
      setTimeout(() => {
        try {
          dispatch(searchCardsThunk(search));
        } catch (error) {
          console.log(error);
        }
      }, 1000)
    );
  };

  useEffect(() => {
    dispatch(getCardsThunk());
    if (!isAuth) {
      navigate("/admin");
    }
  }, [isAuth]);

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
            {cards.map((card, index) => {
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
            })}
          </div>
          <div className="admin-product__main-right">
            <div className="admin-product__main-add">
              <div className="admin-product__main-add-title">
                Добваить товар
              </div>
              <div className="admin-product__main-add-card">
                <div className="admin-product__main-add-card-title">
                  {/* Название товара */}
                  <Input
                    value={cardName}
                    setValue={setCardName}
                    placeholder="Название товара"
                    type="input"
                    valid={{
                      ...register("cardName", {
                        required: true,
                      }),
                    }}
                  />
                  {errors.cardName?.type === "required" && (
                    <div style={{ color: "red", marginTop: "-15px" }}>
                      Поле не должно быть пустое
                    </div>
                  )}
                </div>
                <div className="admin-product__main-add-card-title">
                  <Input
                    value={price}
                    type="number"
                    setValue={setPrice}
                    placeholder="Цена товара"
                    valid={{
                      ...register("price", {
                        required: true,
                      }),
                    }}
                  />
                  {errors.price?.type === "required" && (
                    <div style={{ color: "red", marginTop: "-15px" }}>
                      Поле не должно быть пустое
                    </div>
                  )}
                </div>
                {/* <div className="admin-product__main-add-card-title">
                  <Input
                    value={priceSale}
                    setValue={setPriceSale}
                    placeholder="Скидка"
                  />
                </div> */}
                <div className="admin-product__main-add-card-title">
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setSale(e.target.checked);
                      }}
                      value={sale}
                    />
                    <span>Скидка на товар</span>
                  </label>
                  {sale && (
                    <Input
                      value={priceSale}
                      setValue={setPriceSale}
                      placeholder="Цена старая"
                    />
                  )}
                </div>
                <div className="admin-product__main-add-card-title">
                  <Input
                    typeInput="textarea"
                    value={description}
                    setValue={setDescription}
                    placeholder="Описание товара"
                  />
                  {/* <textarea /> */}
                </div>
                <div className="admin-product__main-add-card-title">
                  Теги
                  {/* <Input value={tags} setValue={setTags} placeholder="Теги" /> */}
                </div>
                <div className="admin-product__main-add-card-title">
                  Категория
                  <Input
                    value={category}
                    setValue={setCategory}
                    placeholder="Категория"
                    valid={{
                      ...register("category", {
                        required: true,
                      }),
                    }}
                  />
                  {errors.category?.type === "required" && (
                    <div style={{ color: "red", marginTop: "-15px" }}>
                      Поле не должно быть пустое
                    </div>
                  )}
                </div>
                <div className="admin-product__main-add-card-title">
                  Фото
                  <label>
                    <input
                      // style={{ display: "none" }}
                      {...register("photos", {
                        required: true,
                      })}
                      type="file"
                      multiple
                      accept="image/*"
                      // value={photos}
                      onChange={(e) => {
                        // setPhotos([...e.target.files]);
                        setPhotos(e.target.files);
                      }}
                    />
                    {errors.photos?.type === "required" && (
                      <div style={{ color: "red" }}>
                        Поле не должно быть пустое
                      </div>
                    )}
                    {/* <div>Добавить фото</div> */}
                  </label>
                </div>
                <Button
                  onClick={handleSubmit(sendForm)}
                  type="submit"
                  text="Создать"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
