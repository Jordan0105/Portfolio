import React, { useEffect } from "react";
import "../src/css/css-components/Projects.css";

function MyProjects() {
  useEffect(() => {}, []);

  return (
    <section className="projects">
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
          <div className="project__list__card">
            <h2 className="project__list__card__text">Countdown</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">Countdown</h2>
              <p className="project__list__card__info__description">
                This is a Countdown built in with HTML, CSS, JavaScript & Bulma
              </p>
            </div>
          </div>
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Amazon Clone.jpg"
            alt="Amazon Clone"
            className="project__list__item__image"
          />
          <div className="project__list__card">
            <h2 className="project__list__card__text">Amazon Clone</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">Amazon Clone</h2>
              <p className="project__list__card__info__description">
                This is a clone of Amazon website (UI) built it from scratch
                just with HTML, CSS & JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Calculator.jpg"
            alt="Calculator"
            className="project__list__item__image"
          />
          <div className="project__list__card">
            <h2 className="project__list__card__text">Calculator</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">Calculator</h2>
              <p className="project__list__card__info__description">
                This is a basic calculator built it with HTML, CSS, JavaScript
                and Bulma
              </p>
            </div>
          </div>
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Heroes arent heroes.jpg"
            alt="Heroes arent Heroes"
            className="project__list__item__image"
          />
          <div className="project__list__card">
            <h2 className="project__list__card__text">Heroes arent Heroes</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">
                Heroes arent Heroes
              </h2>
              <p className="project__list__card__info__description">
                This is a basic game built it with HTML, CSS, JavaScript &
                Rollup
              </p>
            </div>
          </div>
        </div>

        <div className="projects__list__item">
          <img
            src="../assets/Icons/Veterinary Clinic 2.jpg"
            alt="Veterinary Clinic"
            className="project__list__item__image"
          />
          <div className="project__list__card">
            <h2 className="project__list__card__text">Veterinary Clinic</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">
                Veterinary Clinic
              </h2>
              <p className="project__list__card__info__description">
                This is a Veterinary Clinic built it with React + Vite,
                Bootstrap 5 & React Router
              </p>
            </div>
          </div>
        </div>
        <div className="projects__list__item">
          <img
            src="../assets/Icons/Resume.png"
            alt="Stopwatch"
            className="project__list__item__image"
          />
          <div className="project__list__card">
            <h2 className="project__list__card__text">My Portfolio</h2>
            <div className="project__list__info">
              <h2 className="project__list__card__info__text">My Portfolio</h2>
              <p className="project__list__card__info__description">
                This is my portfolio built it with React + Vite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
