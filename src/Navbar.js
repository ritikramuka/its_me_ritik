import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState("About");
  useEffect(() => {
    const url = window.location.href;
    const getPageLocation = url.substr(url.lastIndexOf("/"));
    console.log(getPageLocation);
    if (getPageLocation === "/") setNav("About");
    else if (getPageLocation === "/resume") setNav("Resume");
    else if (getPageLocation === "/projects") setNav("Projects");
  }, [nav]);

  return (
    <div className="navbar">
      <div className="navbar__active">{nav}</div>
      <div className="navbar__items">
        {nav !== "About" ? (
          <Link to="./">
            <div className="navbar__item" onClick={() => setNav("About")}>
              About
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
        {nav !== "Projects" ? (
          <Link to="./projects">
            <div className="navbar__item" onClick={() => setNav("Projects")}>
              Projects
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
