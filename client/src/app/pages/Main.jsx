import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Offcanvas from "react-bootstrap/Offcanvas";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Svg from "../../assets/svg/Svg";
import { ToastContainer } from "react-toastify";

const Main = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = () => {
    console.log(123);
  };
  return (
    <>
      <Header />
      <section className="main__banner">
        <div className="main__banner-container">
          <div className="main__banner-img">
            <div className="main__banner-case">
              <Svg name={"titleLogo"} width={90} height={43} fill={"#5fcac7"} />
              <h1 className="main__banner-title">
                Добро пожаловать в Bellaria
              </h1>
              <div className="main__banner-text h4">
                Предлагаем Вам широкий ассортимент различных ароматных выпечек и
                пироженных
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main__mission about__mission">
        <div className="about__mission-case">
          <div className="container">
            <div className="about__mission-container">
              <h2 className="about__mission-title">Наша миссия</h2>
              <p className="about__mission-text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Praesent molestie eu turpis nec molestie.
                Nam auctor magna mauris.
              </p>
              <ul className="about__mission-list">
                <li className="about__mission-item">
                  <div className="about__mission-item-img">
                    <Svg
                      name={"mission-item"}
                      width={120}
                      height={120}
                      fill={"none"}
                      stroke={"#ffffff"}
                    />
                  </div>
                  <h3 className="about__mission-item-title">
                    Высокие стандарты
                  </h3>
                  <div className="about__mission-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate eaque nam commodi corrupti facere, dolorum
                    inventore enim labore harum, rerum debitis nulla, expedita
                    dolor laboriosam cupiditate hic sunt eum ducimus.
                  </div>
                </li>
                <li className="about__mission-item">
                  <div className="about__mission-item-img">
                    <Svg
                      name={"mission-item"}
                      width={120}
                      height={120}
                      fill={"none"}
                      stroke={"#ffffff"}
                    />
                  </div>
                  <h3 className="about__mission-item-title">
                    Высокие стандарты
                  </h3>
                  <div className="about__mission-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate eaque nam commodi corrupti facere, dolorum
                    inventore enim labore harum, rerum debitis nulla, expedita
                    dolor laboriosam cupiditate hic sunt eum ducimus.
                  </div>
                </li>
                <li className="about__mission-item">
                  <div className="about__mission-item-img">
                    <Svg
                      name={"mission-item"}
                      width={120}
                      height={120}
                      fill={"none"}
                      stroke={"#ffffff"}
                    />
                  </div>
                  <h3 className="about__mission-item-title">
                    Высокие стандарты
                  </h3>
                  <div className="about__mission-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate eaque nam commodi corrupti facere, dolorum
                    inventore enim labore harum, rerum debitis nulla, expedita
                    dolor laboriosam cupiditate hic sunt eum ducimus.
                  </div>
                </li>
                <li className="about__mission-item">
                  <div className="about__mission-item-img">
                    <Svg
                      name={"mission-item"}
                      width={120}
                      height={120}
                      fill={"none"}
                      stroke={"#ffffff"}
                    />
                  </div>
                  <h3 className="about__mission-item-title">
                    Высокие стандарты
                  </h3>
                  <div className="about__mission-item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate eaque nam commodi corrupti facere, dolorum
                    inventore enim labore harum, rerum debitis nulla, expedita
                    dolor laboriosam cupiditate hic sunt eum ducimus.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="main__about about__story">
        <div className="container">
          <div className="about__story-container">
            <h2 className="about__story-title">
              Наши фирменные блюда
              <Svg
                name={"decor-title"}
                width={82}
                height={40}
                fill={"#4b4342"}
                stroke={"none"}
              />
            </h2>
            <ul className="about__story-list">
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={"krug"}
                    height={180}
                    width={180}
                    fill={"transparent"}
                    stroke={"#5fcac7"}
                  />
                  <img
                    src={require("../../assets/images/about/cake_01.png")}
                    alt="Cake"
                  />
                </div>
                <div className="about__story-item-title h3">
                  Праздничные торты
                </div>
                <div className="about__story-item-text h5">Какой-то текст</div>
              </li>
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={"krug"}
                    height={180}
                    width={180}
                    fill={"transparent"}
                    stroke={"#5fcac7"}
                  />
                  <img
                    src={require("../../assets/images/about/cake_02.png")}
                    alt="Cake"
                  />
                </div>
                <div className="about__story-item-title h3">Кексы</div>
                <div className="about__story-item-text h4">Какой-то текст</div>
              </li>
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={"krug"}
                    height={180}
                    width={180}
                    fill={"transparent"}
                    stroke={"#5fcac7"}
                  />
                  <img
                    src={require("../../assets/images/about/cake_03.png")}
                    alt="Cake"
                  />
                </div>
                <div className="about__story-item-title h3">
                  Маленькие торты
                </div>
                <div className="about__story-item-text h4">Какой-то текст</div>
              </li>
              <li className="about__story-item">
                <div className="about__story-item-img">
                  <Svg
                    name={"krug"}
                    height={180}
                    width={180}
                    fill={"transparent"}
                    stroke={"#5fcac7"}
                  />
                  <img
                    src={require("../../assets/images/about/cake_04.png")}
                    alt="Cake"
                  />
                </div>
                <div className="about__story-item-title h3">Кексы</div>
                <div className="about__story-item-text h4">Какой-то текст</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  );
};

export default Main;
