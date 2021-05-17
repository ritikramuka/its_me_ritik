import React from "react";
import "./style/Skillcard.css";

function SkillCard({ skill: { name, icon, discription } }) {
  return (
    <div className="skillCard col-lg-6">
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
      <div className="text">{discription}</div>
    </div>
  );
}

export default SkillCard;
