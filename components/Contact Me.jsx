import React from "react";
import "../src/css/css-components/Contact Me.css";

function ContactMe() {
  return (
    <footer>
      <div className="footer">
        <nav className="menu__footer">
          <ul className="menu__footer__list">
            <li className="menu__footer__item">
              <img
                src="../assets/Icons/Email.png"
                alt="E-mail"
                className="menu__footer__icon"
              />
            </li>
            <li className="menu__footer__item">
              <img
                src="../assets/Icons/Linkedin.png"
                alt="E-mail"
                className="menu__footer__icon"
              />
            </li>
            <li className="menu__footer__item">
              <img
                src="../assets/Icons/GitHub.png"
                alt="E-mail"
                className="menu__footer__icon"
              />
            </li>
            <li className="menu__footer__item">
              <img
                src="../assets/Icons/Twitter.png"
                alt="Twitter"
                className="menu__footer__icon"
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default ContactMe;
