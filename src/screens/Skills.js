import React from "react";
import SkillCard from "../components/SkillCard";

const skills = [
  {
    icon: "devicon-cplusplus-plain colored",
  },
  {
    icon: "devicon-java-plain-wordmark colored",
  },
  {
    icon: "devicon-javascript-plain colored",
  },
  {
    icon: "devicon-nodejs-plain-wordmark colored",
  },
  {
    icon: "devicon-html5-plain-wordmark colored",
  },
  {
    icon: "devicon-css3-plain-wordmark colored",
  },
  {
    icon: "devicon-react-original-wordmark colored",
  },
  {
    icon: "devicon-redux-original colored",
  },
  {
    icon: "devicon-express-original-wordmark colored",
  },
  {
    icon: "devicon-electron-original colored",
  },
  {
    icon: "devicon-git-plain-wordmark colored",
  },
  {
    icon: "devicon-firebase-plain-wordmark colored",
  },
  {
    icon: "devicon-mongodb-plain-wordmark colored",
  },
  {
    icon: "devicon-mysql-plain colored",
  },
  {
    icon: "devicon-docker-plain-wordmark colored",
  },
  {
    icon: "devicon-intellij-plain-wordmark colored",
  },
];

function Skills() {
  return (
    <div className="skills">
      <h6 className="skills__container-intro">What i offer</h6>
      <div className="row">
        {skills.map((skill) => (
          <SkillCard skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
}

export default Skills;
