import React from "react";
import "../src/css/css-components/Projects.css";
function MyProjects() {
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
      <br />
      <br />
      <br />
      <div className="projects__list">
        <div className="projects__list__item"></div>
        <div className="projects__list__item"></div>
        <div className="projects__list__item"></div>
        <div className="projects__list__item"></div>
        <div className="projects__list__item"></div>
        <div className="projects__list__item"></div>
        <div className="projects__list__item"></div>
      </div>
    </div>
  );
}

export default MyProjects;
