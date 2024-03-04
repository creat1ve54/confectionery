import React from 'react';
import Svg from '../../assets/svg/Svg';
import logoFooter from '../../assets/images/logoFooter.png';
import titleLogo from '../../assets/svg/titleLogo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__up">
            <div className="footer__left footer__item">
              <div className="footer__left-text">Follow Us</div>
              <div className="footer__left--line">
                <Svg name={'titleLogo'} width={50} height={40} />
              </div>
              <div className="footer__left--social">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={'krug'}
                      height={85}
                      width={85}
                      fill={'white'}
                    />
                  </li>

                  <li className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={'krug'}
                      height={85}
                      width={85}
                      fill={'white'}
                    />
                    <Svg
                      className="footer__item-social"
                      name={'instagram'}
                      height={30}
                      width={30}
                    />
                  </li>

                  <li className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={'krug'}
                      height={85}
                      width={85}
                      fill={'white'}
                    />
                  </li>

                  <li className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={'krug'}
                      height={85}
                      width={85}
                      fill={'white'}
                    />
                  </li>

                  <li className="footer__item">
                    <Svg
                      className="footer__item-krug"
                      name={'krug'}
                      height={85}
                      width={85}
                      fill={'white'}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__center footer__item">
              <img className="footer__center-logo" src={logoFooter} alt="#" />
            </div>
            <div className="footer__right footer__item">
              <div className="footer__right-text">Get Our Sweet News</div>

              <div className="footer__right--line">
                <Svg name={'titleLogo'} width={50} height={40} />
              </div>
              <div className="footer__right--email"></div>
            </div>
          </div>
          <div className="footer__down">DOWN</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
