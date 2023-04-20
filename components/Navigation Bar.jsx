import React, { useState } from "react";
import ComputerMenu from "./Computer Menu";
import MobileMenu from "./Mobile menu";
import "../src/css/css-components/Menu.css";
import "../src/css/css-components/Button.css";

const NavigationBar = () => {
  const [isAsideScreenVisible, setIsAsideScreenVisible] = useState(true);
  const handleBurguerClick = () => {
    setIsAsideScreenVisible(!isAsideScreenVisible);

    const body = document.querySelector("body");

    if (isAsideScreenVisible) {
      body.style.overflow = "hidden";
      setTimeout(() => {
        const a = document.getElementById("bubble");
        a.classList.add("active");
      }, 1);

      // a.classList.add("active");
    } else body.style.overflow = "auto";
  };
  return (
    <>
      {isAsideScreenVisible ? (
        <ComputerMenu handleBurguerClick={handleBurguerClick} />
      ) : (
        <MobileMenu handleBurguerClick={handleBurguerClick} />
      )}
    </>
  );
};

export default NavigationBar;
