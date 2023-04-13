import React, { useEffect } from "react";
import "../src/css/css-components/Projects.css";

function MyProjects() {
  useEffect(() => {
    const project__list__card = document.getElementsByClassName(
      "project__list__card"
    )[0];
  }, []);

  return (
    // <div id="myProjectContainer">
    //   <div id="projectsTitle">My Projects</div>
    //   <div id="projectsList">
    //     <ul>
    //       <li>Amazon-Clone</li>
    //       <li>Calculator</li>
    //       <li>Countdown</li>
    //       <li>Stopwatch</li>
    //       <li>Heroes Arent Heroes</li>
    //       <li>Veterinary Clinic</li>
    //     </ul>
    //   </div>
    // </div>

    <div className="projects">
      <h2 className="projects__title">My work</h2>

      <div className="projects__list">
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Stopwatch.jpg"
            alt="Stopwatch"
            className="project__list__item__image"
          />
          <div className="project__list__card">
            <h2 className="project__list__card__text">Stopwatch</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">Stopwatch</h2>
              <p className="project__list__card__info__description">
                This is one was my first project built in with HTML, CSS,
                JavaScript & Bulma
              </p>
            </div>
          </div>
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Countdown.jpg"
            alt="Countdown"
            className="project__list__item__image"
          />
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Amazon Clone.jpg"
            alt="Amazon Clone"
            className="project__list__item__image"
          />
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Calculator.jpg"
            alt="Calculator"
            className="project__list__item__image"
          />
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Heroes arent heroes.jpg"
            alt="Heroes arent Heroes"
            className="project__list__item__image"
          />
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Veterinary Clinic 2.jpg"
            alt="Veterinary Clinic"
            className="project__list__item__image"
          />
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Resume.png"
            alt="Stopwatch"
            className="project__list__item__image"
          />
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
