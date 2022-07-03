import React, { Fragment } from "react";
import './App.css';
import ContryCard from "./components/ContryCard";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand"> React with bootstrap sytle </a>
      </nav>
      <ContryCard />
    </Fragment>
  );
}

export default App;
