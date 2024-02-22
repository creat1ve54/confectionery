import React from 'react';
import titleLogo from '../../assets/svg/titleLogo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerWrapper">
          <div className="footerWrapper__up">
            <ul className="footerUp__list">
              <li className="footerUp__item footerUp__itemLeft">
                <p className="footerTitle">
                  <span>Follow Us</span>
                  <img className="footerBublik" src={titleLogo} alt="#" />
                </p>
              </li>
              <li className="footerUp__item footerUp__itemCenter"></li>
              <li className="footerUp__item footerUp__itemRight"></li>
            </ul>
          </div>
          <div className="footerWrapper__down"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
