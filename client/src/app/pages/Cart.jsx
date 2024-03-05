import React, { useEffect, useState } from "react";
import MainBanner from "../components/MainBanner";
import { useDispatch } from "react-redux";
import { sendCartThunk } from "../../redux/cart/cartSlice";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import { useForm } from "react-hook-form";

const Cart = () => {
  const { isLoading, status } = useAppSelector((state) => state.cartSlice);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  if (status === "Заказ отправлен") {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("cartResult", JSON.stringify(0));
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitted },
  } = useForm();

  const [cart, setCart] = useState([]);
  const [result, setResult] = useState(0);
  const dispatch = useDispatch();

  const sendForm = () => {
    try {
      dispatch(
        sendCartThunk({
          cart: cart,
          result: result,
          phone: phone,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
    setResult(JSON.parse(localStorage.getItem("cartResult")));
  }, []);
  return (
    <div className="cart">
      <MainBanner name={"Корзина"} />
      <div className="container">
        {cart.length === 0 ? (
          "Корзина пустая"
        ) : (
          <div>
            {cart.map((el) => (
              <div key={el.id}>{el.cardName}</div>
            ))}

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

            <button disabled={isLoading} onClick={handleSubmit(sendForm)}>
              Отправить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
