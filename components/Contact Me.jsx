import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import "../src/css/css-components/Contact Me.css";

function ContactMe() {
  return (
    <footer id="contactMe">
      <section className="footer">
        <h2 className="contact__title">Contact Me</h2>

        <nav className="menu__footer">
          <ul className="menu__footer__list">
            <AttentionSeeker effect="bounce" delay={300}>
              <li className="menu__footer__item">
                <a href="mailto:jordanma2004@outlook.es">
                  <img
                    src="../assets/Icons/Email.png"
                    alt="E-mail"
                    className="menu__footer__icon hvr-hang"
                  />
                </a>
              </li>
              <li className="menu__footer__item">
                <a
                  href="https://www.linkedin.com/in/yordan-mej%C3%ADa-9a221a266/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="../assets/Icons/Linkedin.png"
                    id="linkedinLogo"
                    alt="Linkedin"
                    className="menu__footer__icon hvr-hang"
                  />
                </a>
              </li>
              <li className="menu__footer__item">
                <a
                  href="https://github.com/Jordan0105"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="../assets/Icons/GitHub.png"
                    alt="GitHub"
                    className="menu__footer__icon githubLogo hvr-hang"
                  />
                </a>
              </li>
              <li className="menu__footer__item">
                <a
                  href="https://twitter.com/Jorsh0105"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="../assets/Icons/Twitter.png"
                    alt="Twitter"
                    className="menu__footer__icon hvr-hang"
                  />
                </a>
              </li>
            </AttentionSeeker>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default ContactMe;
