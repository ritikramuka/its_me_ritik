import React from "react";
import "./style/Skillcard.css";

function SkillCard({ skill: { icon } }) {
  return (
      <div className="skillCard col-md-3 col-6">
        <i className={icon} aria-hidden="true"></i>
      </div>
  );
}

export default SkillCard;
