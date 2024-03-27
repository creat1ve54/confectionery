import React, { useEffect, useState } from "react";
import MainBanner from "../components/MainBanner";
import { useDispatch } from "react-redux";
import { sendCartThunk } from "../../redux/cart/cartSlice";
import { convector, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import IMask from "imask";

const Cart = () => {
  const { isLoading, status } = useAppSelector((state) => state.cartSlice);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  // if (status === "Заказ отправлен") {
  //   localStorage.setItem("cart", JSON.stringify([]));
  //   localStorage.setItem("cartResult", JSON.stringify(0));
  //   navigate("/");
  // }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitted },
  } = useForm();

  const [, setCartFake] = useState("");
  const [result, setResult] = useState(0);
  const dispatch = useDispatch();

  const [, setFake] = useState("");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartResult = JSON.parse(localStorage.getItem("cartResult")) || 0;

  const sendForm = () => {
    try {
      dispatch(
        sendCartThunk({
          cart: cart,
          result: cartResult,
          phone: phone,
        })
      );
      toast.success("Мы вам позвоним для подтверждения заказа!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("cartResult", JSON.stringify(0));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const notify = () => toast("Wow so easy !");

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

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")));
  //   setResult(JSON.parse(localStorage.getItem("cartResult")));
  // }, []);
  return (
    <>
      <Header fake={setCartFake} />
      <section className="cart-page">
        <MainBanner name={"Корзина"} />
        <div className="container">
          {cart.length === 0 ? (
            "Корзина пустая"
          ) : (
            <div className="cart-page__case">
              <div className="cart-page__items">
                {cart.map((cart, index) => (
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
                        <div>
                          <div className="card__btn card__btn--cart">
                            <button
                              onClick={() => onChangeCount("remove", cart.id)}
                            >
                              {" "}
                              -
                            </button>
                            {cart.count}
                            <button
                              onClick={() => onChangeCount("add", cart.id)}
                            >
                              {" "}
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                        className="cart__item-delete"
                        onClick={() => deleteItemCart(cart)}
                      ></div> */}
                  </div>
                ))}

                <div className="cart__result">
                  <span>Итого:</span> {convector(cartResult)}
                </div>
              </div>

              <div className="cart-page__right">
                <div className="cart-page__title">
                  Введите номер телефона, чтобы мы смогли с Вами связаться и
                  утвердить заказ!
                </div>
                <Input
                  placeholder="Введите номер телефона"
                  setValue={setPhone}
                  value={phone}
                  valid={{
                    ...register("phone", {
                      required: true,
                      minLength: 18,
                    }),
                  }}
                  maskClass="phone"
                  maskOptions={"+{7} (000) 000-00-00"}
                  mask={true}
                />
                {errors.phone?.type === "required" && (
                  <div style={{ color: "red", marginTop: "-15px" }}>
                    Поле не должно быть пустое
                  </div>
                )}
                {errors.phone?.type === "minLength" && (
                  <div style={{ color: "red", marginTop: "-15px" }}>
                    Проверьте номер телефона
                  </div>
                )}
                <button
                  className="btn btn--brown"
                  disabled={isLoading}
                  onClick={handleSubmit(sendForm)}
                >
                  Отправить
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
