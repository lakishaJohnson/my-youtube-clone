import React from "react";
import "./About.css";

function About() {
  return (
    <div className="credits">
      <h2 className="title">Credits</h2>
      <div className="inner">
        <section className="credit judy">
          <h3 className="names">Judy Chue</h3>
          <h4 className="links">
            Learn more at:
            <br />
            <a
              href="https://github.com/judychuepursuit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and
            <a
              href="https://www.linkedin.com/in/judy-chue-53697015/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </h4>
        </section>
        <section className="credit kisha">
          <h3 className="names">Lakisha Johnson</h3>
          <h4 className="links">
            Learn more at:
            <br />
            <a
              href="https://github.com/lakishaJohnson"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and
            <a
              href="https://www.linkedin.com/in/lakisha-johnson-0b0587219/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </h4>
        </section>
      </div>
      <div className="inner">
        <section className="credit tee">
          <h3 className="names">Tshering Gurung</h3>
          <h4 className="links">
            Learn more at:
            <br />
            <a
              href="https://github.com/teegrg"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and
            <a
              href="https://www.linkedin.com/in/tsheringgurungny/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </h4>
        </section>
        <section className="credit ridwan">
          <h3 className="names">MD Ridwan Robin</h3>
          <h4 className="links">
            Learn more at:
            <br />
            <a
              href="https://github.com/RK-404"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and
            <a
              href="https://www.linkedin.com/in/mdridwanrobin/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </h4>
        </section>
      </div>
    </div>
  );
}

export default About;
