import React, { Fragment } from "react";
import './App.css';
import DigitalWatch from "./components/DigitalWatch";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand"> React with Forms handling </a>
      </nav>
      <DigitalWatch></DigitalWatch>     
    </Fragment>
  );
}

export default App;
