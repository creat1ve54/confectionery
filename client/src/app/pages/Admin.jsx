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
  };
  return (
    <div className="admin">
      {!isAuth ? (
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
        <div>Привет</div>
      )}
    </div>
  );
};

export default Admin;
