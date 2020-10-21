import React from "react";
import "./Resume.css";
import ToolCard from "./ToolCard";

const tools = [
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  },
  {
    logo: "hello",
    name: "c++",
    level: "70",
  }
];

function Resume() {
  return (
    <div className="resume">
      <div className="container resume__container">
        <div className="row">
          <div className="col-lg-6 education">
            <h4>Education</h4>
            <div className="education__details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellendus repellat voluptate cum consequatur vel hic repudiandae
              debitis. Aut, quisquam?
            </div>
          </div>
          <div className="col-lg-6 experience">
            <h4>Experience</h4>
            <div className="experience__details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellendus repellat voluptate cum consequatur vel hic repudiandae
              debitis. Aut, quisquam?
            </div>
          </div>
        </div>
        <h4 className="tools__languages">Tools And Languages</h4>
        <div className="row">
          {tools.map((tool) => (
            <div className="col-lg-6">
              <ToolCard tools={tool}></ToolCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
