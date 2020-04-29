import React, { useState, useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import PreLoader from "../layout/PreLoader";
import Footer from "../layout/Footer";
import ProductContext from "../../context/product/productContext";

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getProducts, loading } = productContext;

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return (
    <>
      {/* <div className="fixed-action-btn">
        <a href="/addnew" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </a>
      </div> */}
      <div className="card-container">
        <div className="row">
          {!loading &&
            products !== null &&
            products.map((product) => (
              <div key={product._id} className="col s12 m6 l4">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
