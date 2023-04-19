import React, { useEffect } from "react";
import PropTypes from "prop-types";
import translateIcon from "../assets/Icons/Translate.svg";

const ComputerMenu = ({ handleBurguerClick }) => {
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (anchorLink) {
      anchorLink.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        const targetTop = target.offsetTop;

        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      });
    });
  });

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
          <li className="menu__item">
            <a href="#aboutMe">About</a>
          </li>
          <li className="menu__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu__item">
            <a href="#contactMe">Contact</a>
          </li>
          <li className="menu__item">
            <button className="menu__button">
              <span className="menu__button__text">Resume</span>
            </button>
          </li>
          <li className="menu__button__smaller__screen">
            <img
              id="menuBurgerIcon"
              src="../assets/Icons/Menu.svg"
              alt="Menu"
              className="menu__smaller__screen__icon"
              onClick={handleBurguerClick}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
ComputerMenu.propTypes = {
  handleBurguerClick: PropTypes.func.isRequired,
};
export default ComputerMenu;
