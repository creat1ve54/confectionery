import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { checkAdminThunk } from "../../redux/admin/adminSlice";
import { useDispatch } from "react-redux";
import {
  createCardThunk,
  deleteCardsThunk,
  editCardThunk,
  getCardsThunk,
  filterCardsThunk,
} from "../../redux/cards/cardsSlice";
import { useForm } from "react-hook-form";

const Product = ({ card }) => {
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
  const [oldPhotos, setOldPhotos] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (card && card.id != 0) {
      setCardName(card.cardName);
      setCardNameTranslate(card.cardNameTranslate);
      setCategory(card.category);
      setCount(card.count);
      setDescription(card.description);

      setPrice(card.price);
      if (card.priceSale) {
        setSale(true);
      }

      if (card.photos) {
        setOldPhotos(card.photos);
      }

      setPriceSale(card.priceSale);
      setTags(card.tags);
      setValue("cardName", card.cardName);
      setValue("cardNameTranslate", card.cardNameTranslate);
      setValue("category", card.category);
      setValue("count", card.count);
      setValue("description", card.description);
      setValue("price", card.price);
      setValue("priceSale", card.priceSale);
      setValue("tags", card.tags);
    }
  }, [card]);

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
      if (photos) {
        for (let index = 0; index < photos.length; index++) {
          data.append("photos", photos[index]);
        }
      }
      dispatch(createCardThunk(data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCard = () => {
    try {
      const data = new FormData();
      if (card && card.id != 0) {
        data.append("id", card.id);
      }
      data.append("cardName", cardName);
      data.append("price", price);
      data.append("priceSale", priceSale);
      data.append("tags", tags);
      data.append("category", category);
      data.append("description", description);
      data.append("count", count);
      if (photos) {
        for (let index = 0; index < photos.length; index++) {
          data.append("photos", photos[index]);
        }
      }
      dispatch(editCardThunk(data));
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCard = (id) => {
    try {
      dispatch(deleteCardsThunk(id));
      navigate("/admin-product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="admin-product__main-add-title">
        {card && (
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Назад
          </button>
        )}
        {card ? "Изменить или удалить" : "Добваить товар"}
      </div>
      <div className="admin-product__main-add-card">
        {card && (
          <img
            src={`http://localhost:8000/${oldPhotos.split(",")[0]}`}
            alt="oldPhotos"
          />
        )}
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
              type="file"
              multiple
              accept="image/*"
              // value={card}
              onChange={(e) => {
                // setPhotos([...e.target.files]);
                setPhotos(e.target.files);
              }}
            />
            {/* <div>Добавить фото</div> */}
          </label>
        </div>

        {card ? (
          <div>
            <Button
              onClick={handleSubmit(updateCard)}
              type="submit"
              text="Изменить"
            />
            <Button
              onClick={() => {
                deleteCard(card.id);
              }}
              type="submit"
              text="Удалить"
            />
          </div>
        ) : (
          <Button
            onClick={handleSubmit(sendForm)}
            type="submit"
            text="Создать"
          />
        )}
      </div>
    </>
  );
};

export default Product;
