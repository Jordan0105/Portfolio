import React from "react";
import "../src/css/css-components/Menu Burger.css";
import translateIcon from "../assets/Icons/Translate.svg";

const MobileMenu = () => {
  return (
    <div className="aside__menu">
      <ul className="menu__aside__list">
        <li className="menu__item__aside__language">
          <img
            className="menu__aside__item__image"
            src={translateIcon}
            alt="Translate Icon"
          />
        </li>
        <li className="menu__aside__item">
          <a href="#aboutMe">About</a>
        </li>
        <li className="menu__aside__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="menu__aside__item">
          <a href="#contactMe">Contact</a>
        </li>
        <li className="menu__aside__item">
          <button className="menu__aside__button">
            <span className="menu__button__aside__text">Resume</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
