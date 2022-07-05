import React, { Fragment } from "react";
import './App.css';
//import ProductItem from "./components/ProductItem";
import ShoppingCart from "./components/ShoppingCart";
//import WishMessage from "./components/WishMessage";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand"> React with event handling </a>
      </nav>
      {/* <WishMessage /> */}
      {/* <ProductItem /> */}
      <ShoppingCart />
    </Fragment>
  );
}

export default App;
