import React, { Fragment } from "react";
import './App.css';
import AuthUser from "./components/AuthUser";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand"> React with Forms handling </a>
      </nav>
<AuthUser />      
    </Fragment>
  );
}

export default App;
