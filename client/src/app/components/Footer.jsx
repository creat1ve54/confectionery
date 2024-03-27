import React from "react";
import Svg from "../../assets/svg/Svg";
import logoFooter from "../../assets/images/logoFooter.png";
import titleLogo from "../../assets/svg/titleLogo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__up">
            <div className="footer__left ">
              <div className="footer__left-text">Подпишись на нас</div>
              <div className="footer__left-line">
                <Svg
                  name={"titleLogo"}
                  width={50}
                  height={40}
                  fill={"#ffffff"}
                />
              </div>
              <div className="footer__left-social">
                <div className="footer__list">
                  <a href="##" className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={"krug"}
                      height={60}
                      width={60}
                      fill={"white"}
                    />
                    <Svg
                      className="footer__item-social"
                      name={"youtube"}
                      height={25}
                      width={25}
                    />
                  </a>

                  <a href="##" className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={"krug"}
                      height={60}
                      width={60}
                      fill={"white"}
                    />
                    <Svg
                      className="footer__item-social"
                      name={"vk"}
                      height={25}
                      width={25}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__center">
              <NavLink to={"/"}>
                <img className="footer__center-logo" src={logoFooter} alt="#" />
              </NavLink>
            </div>
            {/* <div className="footer__right "> */}
            {/* <div className="footer__right-text">Get Our Sweet News</div>

              <div className="footer__right--line">
                <Svg name={"titleLogo"} width={50} height={40} />
              </div>
              <div className="footer__right--email"></div> */}
            {/* </div> */}
          </div>
          {/* <div className="footer__down">DOWN</div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
