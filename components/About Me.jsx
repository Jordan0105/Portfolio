import React, { useEffect } from "react";
import "../src/css/css-components/About Me.css";
import "../src/css/css-components/Bob Animation.css";
import { AttentionSeeker } from "react-awesome-reveal";

function AboutMe() {
  useEffect(() => {
    // console.clear();
    const bullets = document.getElementsByClassName("about__item__text");
    const length = bullets.length;

    //FIXME: Something weird here
    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        bullets[i].style.animation =
          "typing 4s steps(22), blink .5s step-end infinite alternate";
        bullets[i].style.borderRight = ".15em solid white";
        bullets[i].style.display = "block";
      }, 1000);
    }

    for (let i = 0; i < length; i++) {
      bullets[i].addEventListener("animationend", () => {
        bullets[i].style.borderRight = 0;
      });
    }
  }, []);

  return (
    <section id="aboutMe" className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__description">
        <p className="about__description__text">
          Hello there! My name is Yordan, and I&#39;m passionate about creating
          things related to coding. I&#39;ve been building websites for the past
          year, and I&#39;ve had a blast doing it. <br />
          <br />
          Currently, I&#39;m studying System Engineering and have knowledge of
          several programming languages such as:
        </p>
        <ul className="about__list__languages">
          <li className="about__item__language">
            <img
              src="../assets/Icons/C.png"
              id="cLogo"
              className="about__item__language__bullets"
              alt="C Logo"
            ></img>

            <p className="about__item__text">C</p>
          </li>
          <li className="about__item__language">
            <img
              src="../assets/Icons/CS.png"
              id="csLogo"
              className="about__item__language__bullets"
              alt="C# Logo"
            ></img>
            <p className="about__item__text">C#</p>
          </li>
          <li className="about__item__language">
            <img
              src="../assets/Icons/JavaScript.png"
              id=""
              className="about__item__language__bullets"
              alt="JavaScript Logo"
            ></img>
            <p className="about__item__text">JavaScript</p>
          </li>
          <li className="about__item__language">
            <img
              src="../assets/Icons/Python.png"
              id="pyLogo"
              className="about__item__language__bullets"
              alt="Python Logo"
            ></img>
            <p className="about__item__text">Python</p>
          </li>
          <li className="about__item__language">
            <img
              src="../assets/Icons/SQL.png"
              id="sqLogo"
              className="about__item__language__bullets"
              alt="SQL Logo"
            ></img>
            <p className="about__item__text">SQL</p>
          </li>
          <li className="about__item__language">
            <img
              src="../assets/Icons/TypeScript.png"
              id="tsLogo"
              className="about__item__language__bullets"
              alt="TypeScript Logo"
            ></img>
            <p className="about__item__text">TypeScript</p>
          </li>
        </ul>
        <br />
        <br />
        <p className="about__frontend__text">
          Front-End tools that I know are:
        </p>
        <div className="about__list__fronTools">
          <AttentionSeeker effect="tada" cascade>
            <img
              src="../assets/Icons/HTML5.png"
              id="HTMLogo"
              alt="HTML5"
              title="HTML"
              className="about__item__fronTool hvr-bob"
            />
            <img
              src="../assets/Icons/CSS3.png"
              id="CSSLogo"
              alt="CSS3"
              title="CSS"
              className="about__item__fronTool hvr-bob"
            />
            <img
              src="../assets/Icons/Sass.png"
              id="SassLogo"
              alt="Sass"
              title="Sass"
              className="about__item__fronTool hvr-bob"
            />
            <img
              src="../assets/Icons/React.png"
              id="ReactLogo"
              alt="React"
              title="React"
              className="about__item__fronTool hvr-bob"
            />
            <img
              src="../assets/Icons/Bootstrap5.png"
              id="BootstrapLogo"
              alt="Bootstrap"
              title="Bootstrap"
              className="about__item__fronTool hvr-bob"
            />
            <img
              id="BulmaLogo"
              src="../assets/Icons/Bulma.png"
              alt="Bulma"
              className="about__item__fronTool hvr-bob"
            />
          </AttentionSeeker>
        </div>
        <p className="about__vc__testing__text">
          And here are some of the version control and testing tools I&#39;ve
          used:
        </p>
        <div className="about__list__testingTools">
          <AttentionSeeker effect="tada" cascade delay={2800}>
            <img
              src="../assets/Icons/Git.png"
              id="gitLogo"
              alt="Git"
              className="about__item__tesTool hvr-bob"
            />
            <img
              src="../assets/Icons/GitHub.png"
              alt="GitHub"
              className="about__item__tesTool githubLogo hvr-bob"
            />
            <img
              src="../assets/Icons/Travis CI.png"
              id="travisLogo"
              alt="Travis CI Logo"
              className="about__item__tesTool hvr-bob"
            />
            <img
              src="../assets/Icons/Jest.png"
              id="jestLogo"
              alt="Jest"
              className="about__item__tesTool hvr-bob"
            />
          </AttentionSeeker>
        </div>
      </div>
    </section>
  );
}

//TODO: create a glow box for skills and languaes I know (green you know)
//TODO: use js for when the animation is finished of languages
//TODO: add scroll reveal to languages
export default AboutMe;
