import React from "react";
import { usersAPI } from "./api/axios";
import Routs from "./routs/Routs";

function App() {
  const onLogin = async () => {
    for (let index = 0; index < 11; index++) {
      let { data } = await usersAPI.login();
    }
  };
  return (
    <div className="app">
      <div className="app__body">
        <Routs />
      </div>
    </div>
  );
}

export default App;
