import React, { useState, useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { checkAdminThunk, loginAdminThunk } from "../../redux/admin/adminSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Admin = React.forwardRef((props, ref) => {
  const { isAuth, isLoading, status } = useAppSelector(
    (state) => state.adminSlice
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuth) {
      navigate("/admin-product");
    }
  }, [isAuth]);

  const sendForm = () => {
    const admin = new FormData();
    admin.append("userName", userName);
    admin.append("password", password);
    dispatch(loginAdminThunk(admin));
    navigate("/admin");
  };
  return (
    <div className="admin">
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <div className="admin__login">
          <form className="admin__login-form">
            <Input
              ref={ref}
              value={userName}
              setValue={setUserName}
              placeholder="Логин"
              valid={{
                ...register("userName", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                }),
              }}
            />
            {/* {errors.userName?.type === "required" && (
              <div style={{ color: "red", marginTop: "-15px" }}>Поле</div>
            )} */}
            {/* {errors.userName?.type === "maxLength" && (
              <div style={{ color: "red", marginTop: "-15px" }}>
                Поле Логин не должно быть больше 20 символов
              </div>
            )}
            {errors.userName?.type === "minLength" && (
              <div style={{ color: "red", marginTop: "-15px" }}>
                Поле Логин не должно быть меньше 4 символов
              </div>
            )} */}
            <Input
              valid={{
                ...register("password", { required: true, minLength: 4 }),
              }}
              type={'password'}
              ref={ref}
              value={password}
              setValue={setPassword}
              placeholder="Пароль"
            />
            {errors.password?.type === "required" ||
            errors.userName?.type === "required" ? (
              <div style={{ color: "red", marginTop: "-15px" }}>
                Не верный логин или пароль
              </div>
            ) : (
              ""
            )}
            {/* {errors.password?.type === "minLength" && (
              <div style={{ color: "red", marginTop: "-15px" }}>
                Поле Пароль не должно быть меньше 4 символов
              </div>
            )} */}
            <Button
              onClick={handleSubmit(sendForm)}
              type="submit"
              text="Отправить"
            />
            {status && (
              <div
                style={{ color: "red", marginTop: "0px", textAlign: "center" }}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
});

export default Admin;
