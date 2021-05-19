import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState("About");
  useEffect(() => {
    const url = window.location.href;
    const getPageLocation = url.substr(url.lastIndexOf("/"));
    console.log(getPageLocation);
    if (getPageLocation === "/") setNav("About");
    else if (getPageLocation === "/resume") setNav("Resume");
    else if (getPageLocation === "/portfolio") setNav("Portfolio");
    else if (getPageLocation === "/skills") setNav("Skills");
  }, [nav]);

  return (
    <div className="navbar navbar navbar-expand-lg">
      <div className="navbar__active">{nav}</div>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <span class="iconify" data-icon="bi:list" data-inline="false"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar__items navbar-nav ml-auto">
          {nav !== "About" ? (
            <Link to="./">
              <div className="navbar__item" onClick={() => setNav("About")}>
                About
            </div>
            </Link>
          ) : null}
          {nav !== "Portfolio" ? (
            <Link to="./portfolio">
              <div className="navbar__item" onClick={() => setNav("Portfolio")}>
                Portfolio
            </div>
            </Link>
          ) : null}
          {nav !== "Skills" ? (
            <Link to="./skills">
              <div className="navbar__item" onClick={() => setNav("Skills")}>
                Skills
            </div>
            </Link>
          ) : null}
          {nav !== "Resume" ? (
            <Link to="./resume">
              <div className="navbar__item" onClick={() => setNav("Resume")}>
                Resume
            </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
