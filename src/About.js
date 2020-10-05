import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "web developer",
    icon: "icon",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, harum.",
  },
  {
    name: "web developer",
    icon: "icon",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, harum.",
  },
  {
    name: "web developer",
    icon: "icon",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, harum.",
  },
  {
    name: "web developer",
    icon: "icon",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, harum.",
  },
  {
    name: "web developer",
    icon: "icon",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, harum.",
  },
  {
    name: "web developer",
    icon: "icon",
    discription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, harum.",
  },
];

function About() {
  return (
    <div className="about container">
      <h5 className="about__heading">
        Hello im ritik ramuka computer science and engineering student
      </h5>
      <div className="container about__container">
        <h6 className="about__container-intro">What i offer</h6>
        <div className="row">
          {skills.map(skill =>
                <SkillCard skill = {skill}></SkillCard>
            )}
        </div>
      </div>
    </div>
  );
}

export default About;
