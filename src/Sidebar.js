import React from "react";
import "./Sidebar.css";
import profile from "./images/img.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profile} alt="Profile" />
      <div className="sidebar__utils">
        <div className="sidebar__greating">HELLO!</div>
        <div className="sidebar__name">I'M RITIK</div>
        <div className="sidebar__name-title-one">
          I'M A CREATIVE WEB DEVELOPER
        </div>
        <div className="sidebar__name-title-two">
          I STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERSECTS.
        </div>
        <div className="container row sidebar__social-handle">
          <div className="col-md-3 col-sm-6">insta</div>
          <div className="col-md-3 col-sm-6">fb</div>
          <div className="col-md-3 col-sm-6">git</div>
          <div
            className="col-md-3 col-sm-6"
            onClick={() => {
              window.location.href = "mailto:riitk.ramuka@gmail.com";
            }}
          >
            gmai
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
