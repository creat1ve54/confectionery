import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    setIsAuth(!isAuth);
    sessionStorage.isAuth = !isAuth;
  };
  return (
    <div className="admin">
      {!sessionStorage.isAuth ? (
        <div className="admin__login">
          <form className="admin__login-form">
            <Input value={login} setValue={setLogin} placeholder="Логин" />
            <Input
              value={password}
              setValue={setPassword}
              placeholder="Пароль"
            />
            <Button onClick={sendForm} type="submit" text="Отправить" />
          </form>
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="admin__header">
              <div className="admin__header-item">Товары</div>
              <div className="admin__header-item">Спецификация</div>
              <div className="admin__header-item">Посты</div>
            </div>
            <div className="admin__main">
              <div className="admin__main-left">
                <a href="##" className="admin__main-item border-custom">
                  <img src="" alt="" />
                  <div className="admin__main-item-title">Печенье</div>
                </a>
              </div>
              <div className="admin__main-right">
                <div className="admin__main-add">
                  <div className="admin__main-add-title">Добваить товар</div>
                  <div className="admin__main-add-card">
                    <label className="admin__main-add-card-file">
                      <span>Фото</span>
                      <input type="file" name="" id="" />
                    </label>
                    <div className="admin__main-add-card-title">
                      {/* Название товара */}
                      <Input
                        value={password}
                        setValue={setPassword}
                        placeholder="Название товара"
                      />
                    </div>
                    <div className="admin__main-add-card-title">
                      <Input
                        value={password}
                        setValue={setPassword}
                        placeholder="Скидка"
                      />
                    </div>
                    <div className="admin__main-add-card-title">
                      <Input
                        value={password}
                        setValue={setPassword}
                        placeholder="Цена товара"
                      />
                    </div>
                    <div className="admin__main-add-card-title">
                      <Input
                        value={password}
                        setValue={setPassword}
                        placeholder="Цена старая"
                      />
                      <span>*если указали скидку</span>
                    </div>
                    <div className="admin__main-add-card-title">
                      Описание товара
                      <textarea />
                    </div>
                    <div className="admin__main-add-card-title">Теги</div>
                    <div className="admin__main-add-card-title">Категория</div>
                    <Button onClick={sendForm} type="submit" text="Отправить" />
                  </div>
                </div>
                {/* <div className="admin__main-edit"></div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
