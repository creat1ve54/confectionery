import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Offcanvas from "react-bootstrap/Offcanvas";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Main = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = () => {
    console.log(123);
  };
  return (
    <>
      <Header />
      {/* <button onClick={handleShow}>Личный кабинет</button>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Войти</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Input
            placeholder="Введите номер телефона"
            setValue={setPhone}
            value={phone}
            maskClass="phone"
            maskOptions={"+{7} (000) 000-00-00"}
            mask={true}
          />
          <Button onClick={onSubmit} text="Отправить" />
        </Offcanvas.Body>
      </Offcanvas> */}
      <Footer />
    </>
  );
};

export default Main;
