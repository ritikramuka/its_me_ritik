import React from "react";

function About() {
  return (
    <div className="about container">
      <div className="about__section-one">
        I'm currently living in New Delhi, India. I'm an absolute geek and love geeking out on all things Linux and JavaScript.
        My favorite development stack at the moment is React, Electron, Node, MongoDB, Express and Ubuntu
      </div>
      <hr />
      <h3 className="about__sub-heading">Why Work With Me?</h3>
      <div className="about__section-two row">
        <div className="col-md-6 about__section-two__left">
          Analytical
          <br />
          Clear communicator
          <br />
          Strong interpersonal skills
        </div>
        <div className="col-md-6 about__section-two__right">
          Results driven
          <br />
          Deadline conscious
          <br />
          Big-picture problem solver
        </div>
      </div>
    </div>
  );
}

export default About;
