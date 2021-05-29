import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState("ABOUT");
  useEffect(() => {
    const url = window.location.href;
    const getPageLocation = url.substr(url.lastIndexOf("/"));
    console.log(getPageLocation);
    if (getPageLocation === "/") setNav("ABOUT");
    else if (getPageLocation === "/resume") setNav("RESUME");
    else if (getPageLocation === "/portfolio") setNav("PORTFOLIO");
    else if (getPageLocation === "/skills") setNav("SKILLS");
  }, [nav]);

  return (
    <div className="navbar navbar navbar-expand-lg">
      <div className="navbar__active">{nav}</div>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <span class="iconify neumorphic-btn" data-icon="bi:list" data-inline="false"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar__items navbar-nav ml-auto">
          {nav !== "ABOUT" ? (
            <Link to="./" style={{ textDecoration: 'none' }}>
              <div className="navbar__item neumorphic-btn" onClick={() => setNav("ABOUT")}>
                ABOUT
            </div>
            </Link>
          ) : null}
          {nav !== "PORTFOLIO" ? (
            <Link to="./portfolio" style={{ textDecoration: 'none' }}>
              <div className="navbar__item neumorphic-btn" onClick={() => setNav("PORTFOLIO")}>
                PORTFOLIO
            </div>
            </Link>
          ) : null}
          {nav !== "SKILLS" ? (
            <Link to="./skills" style={{ textDecoration: 'none' }}>
              <div className="navbar__item neumorphic-btn" onClick={() => setNav("SKILLS")}>
                SKILLS
            </div>
            </Link>
          ) : null}
          {nav !== "RESUME" ? (
            <Link to="./resume" style={{ textDecoration: 'none' }}>
              <div className="navbar__item neumorphic-btn" onClick={() => setNav("RESUME")}>
                RESUME
            </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
