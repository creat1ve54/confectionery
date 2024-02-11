import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { checkAdminThunk } from "./redux/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import AppRouter from "./routs/AppRouts";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAdminThunk());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app__body">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
