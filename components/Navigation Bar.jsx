import React from "react";
import translateIcon from "../assets/Icons/Translate.svg";
import "../src/css/css-components/Menu.css";
import "../src/css/css-components/Button.css";

function NavigationBar() {
  return (
    <header>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item__language">
            <img
              className="menu__item__image"
              src={translateIcon}
              alt="Translate Icon"
            />
          </li>
          <li className="menu__item">About</li>
          <li className="menu__item">Projects</li>
          <li className="menu__item">Contact</li>
          <li className="menu__item">
            <button className="menu__button">
              <span className="menu__button__text">Resume</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
