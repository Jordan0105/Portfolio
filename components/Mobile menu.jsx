import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../src/css/css-components/Menu Burger.css";
import translateIcon from "../assets/Icons/Translate.svg";
import ComputerMenu from "./Computer Menu";

const MobileMenu = ({ handleBurguerClick }) => {
  const [isNavItemClicked, setIsNavItemClicked] = useState(false);

  const handleClick = () => {
    setIsNavItemClicked(!isNavItemClicked);
    handleBurguerClick();
  };

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
  // TODO: Create a useState to render open burguer and not open burguer triggered onClick buttons
  // const hiddeBurguerMenu = () => {
  //   const test = document.querySelector(".aside__menu");
  //   test.style.display = "none";
  //   // const navMenu = document.querySelector(".menu");
  //   // navMenu.style.display = "flex";
  // };
  return isNavItemClicked ? (
    <ComputerMenu handleBurguerClick={handleBurguerClick} />
  ) : (
    <div className="aside__menu">
      <ul className="menu__aside__list">
        <li className="menu__item__aside__language">
          <img
            className="menu__aside__item__image"
            src={translateIcon}
            alt="Translate Icon"
            onClick={handleClick}
          />
        </li>
        <li className="menu__aside__item">
          <a href="#aboutMe" onClick={handleClick}>
            About
          </a>
        </li>
        <li className="menu__aside__item">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="menu__aside__item">
          <a href="#contactMe" onClick={handleClick}>
            Contact
          </a>
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

MobileMenu.propTypes = {
  handleBurguerClick: PropTypes.func.isRequired,
};
export default MobileMenu;
