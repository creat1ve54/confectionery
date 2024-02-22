import React, { useEffect, useState } from "react";
import MainBanner from "../components/MainBanner";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);
  return (
    <div className="cart">
      <MainBanner name={"Корзина"} />
      {cart.map((el) => (
        <div key={el.id}>{el.cardName}</div>
      ))}
    </div>
  );
};

export default Cart;
