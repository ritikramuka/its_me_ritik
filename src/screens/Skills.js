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
        <div className="container about__container">
            <h6 className="about__container-intro">What i offer</h6>
            <div className="row">
                {skills.map(skill =>
                    <SkillCard skill={skill}></SkillCard>
                )}
            </div>
        </div>
    )
}

export default Skills
