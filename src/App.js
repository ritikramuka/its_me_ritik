import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3 app__sidebar">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__content">
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route exact path="/resume">
                  <Resume />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
