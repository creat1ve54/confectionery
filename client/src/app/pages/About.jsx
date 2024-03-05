import React from "react";
import MainBanner from "../components/MainBanner";
import Svg from "../../assets/svg/Svg";
import oldMan from "../../assets/images/old_man.png";

const About = () => {
  return (
    <section className="about">
      <MainBanner name={"О нас"} />
      <section className="about__story">
        <div className="container">
          <div className="about__story-container">
            <h2 className="about__story-title">
              Наша история
              <Svg
                name={"decor-title"}
                width={82}
                height={40}
                fill={"#4b4342"}
                stroke={"none"}
              />
            </h2>
            <p className="about__story-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              cumque doloribus neque explicabo, ipsam quibusdam adipisci dolore
              esse harum natus molestiae culpa nihil possimus ea expedita iusto.
              Quae, optio consectetur! Accusantium, voluptas similique nulla
              doloremque provident laboriosam. Minima qui enim et eveniet
              sapiente dolorem ratione consequatur facilis explicabo incidunt
              aliquam amet illum, hic saepe cupiditate tenetur provident laborum
              ipsa reprehenderit! Quae dignissimos cumque voluptatibus?
              Quibusdam accusamus facere impedit esse quidem fugiat minima,
              dicta facilis atque error voluptate ipsum nemo inventore adipisci!
              Voluptates ad dicta tenetur quas? Dolorum explicabo non voluptas!
              Facilis eum perspiciatis
            </p>
          </div>
        </div>
      </section>
      <section className="about__mission">
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
      <section className="about__chef">
        <div className="container">
          <div className="about__chef-container">
            <div className="about__chef-left">
              <img src={oldMan} alt="Мастершеф" />
            </div>
            <div className="about__chef-right">
              <h2 className="about__chef-title">
                Алекс Доу
                <div className="about__chef-subtitle">Мастершеф</div>
                <Svg
                  name={"decor-title"}
                  width={82}
                  height={40}
                  fill={"#4b4342"}
                  stroke={"none"}
                />
              </h2>
              <p className="about__chef-description">
                Алекс - рожденный в Риме шеф-кондитер, который провел 15 лет в
                своем городе Риме, совершенствуя свое ремесло и создавая
                исключительные творения. Преддверие рта, украшенное тинцидентом.
                Движение и течение языка. Накопление средств, изречение порта.
                Аликвам рутрум улламкорпер велит хендрериту выздоравливать.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about__standarts">
        <div className="container">
          <div className="about__standarts-container">
            <h2 className="about__standarts-title">
              Наши стандарты
              <Svg
                name={"decor-title"}
                width={82}
                height={40}
                fill={"#4b4342"}
                stroke={"none"}
              />
            </h2>
            <ul className="about__standarts-list">
              <li className="about__standarts-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse
              </li>
              <li className="about__standarts-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse
              </li>
              <li className="about__standarts-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse
              </li>
              <li className="about__standarts-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse
              </li>
              <li className="about__standarts-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
