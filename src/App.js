import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3 app__sidebar">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__content">Hello xD</div>
        </div>
      </div>
    </div>
  );
}

export default App;
