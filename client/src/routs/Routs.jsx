import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../app/pages/Main";
import Error from "../app/pages/Error";
import Catalog from "../app/pages/Catalog";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
    </Routes>
  );
};

export default Routs;
