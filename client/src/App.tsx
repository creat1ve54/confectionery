import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import Routs from "./routs/Routs";
import { checkAdminThunk } from "./redux/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAdminThunk());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app__body">
        <Routs />
      </div>
    </div>
  );
};

export default App;
