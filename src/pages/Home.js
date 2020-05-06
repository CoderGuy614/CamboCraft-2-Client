import React, { Fragment } from "react";
import Products from "../components/products/Products";
import FilterBar from "../components/layout/FilterBar";

const Home = () => {
  return (
    <Fragment>
      <FilterBar />
      <Products />
    </Fragment>
  );
};

export default Home;
