import React from 'react'
import SkillCard from "../components/SkillCard";

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

function Skills() {
    return (
        <div className="skills container">
            <h6 className="skills__container-intro">What i offer</h6>
            <div className="row">
                {skills.map(skill =>
                    <SkillCard skill={skill}></SkillCard>
                )}
            </div>
        </div>
    )
}

export default Skills
