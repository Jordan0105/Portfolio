import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import "../src/css/css-components/Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__name">
        <Fade duration={2500} triggerOnce>
          <p className="intro__greeting">Hi, my name is...</p>
        </Fade>
        <Zoom delay={1000} cascade triggerOnce>
          <h1 className="intro__my__name">Yordan Mejía &</h1>
          <h2 className="intro__profession">I&#39;m a Front-End Developer</h2>
        </Zoom>
      </div>
      <div className="intro__description">
        <Fade cascade>
          <span className="xd">
            I&#39;m a System Engineering student with a strong passion for
            learning about all things tech-related.
          </span>
          <span className="xd">
            I love designing web pages and working on projects that challenge me
            and help me grow.
            <br />
            <br />
          </span>
          <span className="xd">
            Thanks for taking the time to read my introduction.
          </span>
          <span className="xd">
            I&#39;m excited to connect with you and collaborate on stunnig and
            innovative projects.
          </span>
        </Fade>
      </div>
    </section>
  );
};

export default Intro;
