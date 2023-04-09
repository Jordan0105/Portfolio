import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__name">
        <Fade duration={2500}>
          <p className="intro__greeting">Hi, my name is...</p>
        </Fade>
        <Zoom delay={1000}>
          <h1 className="intro__my__name">Yordan Mejía.</h1>
          <h2 className="intro__profession">I&#39;m a Front-End Developer</h2>
        </Zoom>
      </div>
      <div id="intro__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum odio
        quasi quas. Deleniti eligendi necessitatibus non rerum eius distinctio
        corporis sint laboriosam, cupiditate perferendis unde similique sit.
        Quibusdam, nobis praesentium.
      </div>
    </div>
  );
};

export default Intro;
