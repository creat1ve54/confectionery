import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../app/pages/Main";
import Error from "../app/pages/Error";
import Catalog from "../app/pages/Catalog";
import Admin from "../app/pages/Admin";
import AdminProduct from "../app/pages/AdminProduct";
import AdminProductCard from "../app/pages/AdminProductCard";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admin-product" element={<AdminProduct />}></Route>
      <Route path="/admin-product/:cardNameTranslate" element={<AdminProductCard />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
    </Routes>
  );
};

export default Routs;
