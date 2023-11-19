import React from "react";
import { usersAPI } from "./api/axios";
import Header from "./app/components/Header";
import Routs from "./routs/Routs";
import Footer from "./app/components/Footer";

function App() {
  const onLogin = async () => {
    for (let index = 0; index < 11; index++) {
      let { data } = await usersAPI.login();
    }
  };
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Routs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
