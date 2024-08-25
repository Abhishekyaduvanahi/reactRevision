// src/App.jsx

import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./app.css";

const App = () => {
  return (
    <div>
      <h1>Shopping Cart App</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
