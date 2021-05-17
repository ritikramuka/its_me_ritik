import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./screens/About";
import Resume from "./screens/Resume";
import Projects from "./screens/Projects";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
