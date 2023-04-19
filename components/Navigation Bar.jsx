import React, { useState } from "react";
import ComputerMenu from "./Computer Menu";
import MobileMenu from "./Mobile menu";
import "../src/css/css-components/Menu.css";
import "../src/css/css-components/Button.css";

const NavigationBar = () => {
  const [isAsideScreenVisible, setIsAsideScreenVisible] = useState(true);
  const handleBurguerClick = () => {
    setIsAsideScreenVisible(!isAsideScreenVisible);
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
