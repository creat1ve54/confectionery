import React, { memo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../app/pages/Main";
import Error from "../app/pages/Error";
import Catalog from "../app/pages/Catalog";
import Admin from "../app/pages/Admin";
import AdminProduct from "../app/pages/AdminProduct";
import AdminProductCard from "../app/pages/AdminProductCard";
import { useAppSelector } from "../redux/hooks";
import { authRoutes, publishRoutes } from "./Routs";

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.adminSlice);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      {publishRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default AppRouter;
