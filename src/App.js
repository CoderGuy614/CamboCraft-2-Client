import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/layout/Navbar";
import Products from "./components/products/Products";
import ProductModal from "./components/products/ProductModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <ProductModal />
      <Products />
    </Fragment>
  );
};

export default App;
