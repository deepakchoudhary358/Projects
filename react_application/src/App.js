import React, { Fragment } from "react";
import './App.css';
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <Fragment>
    <nav className="navbar">
      <span> Root Component</span>
    </nav>
      <MessageCard />
    </Fragment>
  );
}

export default App;
