import React from "react";
import "./style/Sidebar.css";
import profile from "../images/ritik.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profile} alt="Profile" />
      <div className="sidebar__utils">
        <div className="sidebar__greating">HELLO!</div>
        <div className="sidebar__name">I'M RITIK</div>
        <div className="sidebar__name-title">
          <div className="sidebar__name-title-one">
            I'M A CREATIVE WEB DEVELOPER
        </div>
          <div className="sidebar__name-title-two">
            I STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERSECTS.
        </div>
        </div>
        <div className="container row sidebar__social-handle">
          <div className="col-md-3 col-6"><span class="iconify" data-icon="ant-design:linkedin-filled" data-inline="false"></span></div>
          <div className="col-md-3 col-6"><span class="iconify" data-icon="simple-icons:leetcode" data-inline="false"></span></div>
          <div className="col-md-3 col-6"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></div>
          <div
            className="col-md-3 col-6"
            onClick={() => {
              window.location.href = "mailto:riitk.ramuka@gmail.com";
            }}
          >
            <span class="iconify" data-icon="simple-icons:gmail" data-inline="false"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
