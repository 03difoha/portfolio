import React from "react";
import ReactDOM from "react-dom";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/portfolio.css";

import logo from "./img/me.png";

import projectData from "./projectData.js";

function Hero(props) {
  return (
    <div>
      <img className="hero-img round" src={logo} alt="Logo"></img>
      <h1 className="hero-text">Harry Difolco</h1>
      <h3 className="hero-text">Web Developer</h3>

      <h6 className="hero-text">
        <a href="mailto:hdifolco@yahoo.com">hdifolco@yahoo.com</a> <br />
        <a href="https://www.linkedin.com/in/hdifolco/">Linkedin</a> <br />
        <a href="https://github.com/03difoha">Github</a> <br />
        +86 15026741076
        <br />
        +44 7931848691
        <br />
      </h6>
    </div>
  );
}

function Project(props) {
  return (
    <a href={props.link}>
      <div className="profile">
        <div className="photo">
          <img alt="img" src={props.img} />{" "}
        </div>
        <div className="content">
          <div className="text">
            <h5 className="projectDesc projectTitle">{props.title}</h5>
            <p className="projectDesc">{props.desc}</p>
            <Chip tech={props.tech} />
          </div>
        </div>
      </div>
    </a>
  );
}

function Chip(props) {
  var chipList = props.tech.map(function(t) {
    return <div className={"chip " + t}>{t}</div>;
  });

  return chipList;
}

class Projects extends React.Component {
  render() {
    var projectList = projectData.map(function(p) {
      return (
        <Project
          key={p.title}
          title={p.title}
          img={p.img}
          link={p.link}
          desc={p.desc}
          tech={p.tech}
        />
      );
    });

    return <div>{projectList}</div>;
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <div className="my-container">
        <div className="row">
          <div className="left-col five columns">
            <Hero />
          </div>
          <div className="right-col seven columns">
            <Projects />
          </div>
        </div>
        <footer className="footer">
          <a
            className="footer-text"
            href="https://github.com/03difoha/portfolio"
          >
            Portfolio built with React
          </a>
        </footer>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Portfolio />, document.getElementById("root"));
