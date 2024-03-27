import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Svg from "../../assets/svg/Svg";

const Contact = () => {
  return (
    <>
      <Header />
      <MainBanner name={"Контакты"} />
      <section className="contact">
        <div className="container">
          <h2 className="about__story-title">
            Наши контакты
            <Svg
              name={"decor-title"}
              width={82}
              height={40}
              fill={"#4b4342"}
              stroke={"none"}
            />
          </h2>
          <div className="contact__container">
            <div className="contact__item">
              <p className="contact__item-title h3">Время работы</p>
              <p className="contact__item-text">По будням</p>
              <p className="contact__item-text">с 8.00 до 17.00</p>
            </div>
            <ul className="contact__list">
              <li className="contact__item">
                <p className="contact__item-title h3">Директор по продажам</p>
                <a href="tel:+79282207035" className="contact__item-text">+7 928 220-70-35</a>
                <a href="mailto:m.dzhimsheleyshvili@nkf26.ru" className="contact__item-text">m.dzhimsheleyshvili@nkf26.ru</a>
              </li>
              <li className="contact__item">
                <p className="contact__item-title h3">Региональный менеджер</p>
                <a href="tel:+79887300769" className="contact__item-text">+7 988 730-07-69</a>
                <a href="mailto:m.dzhimsheleyshvili@nkf26.ru" className="contact__item-text">m.dzhimsheleyshvili@nkf26.ru</a>
              </li>
              <li className="contact__item">
                <p className="contact__item-title h3">Региональный менеджер</p>
                <a href="tel:+79383033953" className="contact__item-text">+7 938 303-39-53</a>
                <a href="mailto:m.dzhimsheleyshvili@nkf26.ru" className="contact__item-text">m.dzhimsheleyshvili@nkf26.ru</a>
              </li>
            </ul>
            <div className="contact__item">
              <p className="contact__item-title h3">Адрес</p>
              <p className="contact__item-text">Ставропольский край, г. Невинномысск, ул. Маяковского, помещение 28Д</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
