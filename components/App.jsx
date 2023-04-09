import React from "react";
import Intro from "./Intro";
import AboutMe from "./About Me";
import MyProjects from "./My Projects";
import NavigationBar from "./Navigation Bar";
import ContactMe from "./Contact Me";
import "../src/css/App.css";

const App = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Intro />
        <AboutMe />
        <MyProjects />
      </main>
      <ContactMe />
    </>
  );
};

export default App;
