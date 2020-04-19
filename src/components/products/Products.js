import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import PreLoader from "../layout/PreLoader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get("/products");
    const data = await res.data;
    console.log(data);
    setProducts(data);
    setLoading(false);
  };
  if (loading) {
    return <PreLoader />;
  }

  return !loading && products.length === 0 ? (
    <p className="center"> No Products to show</p>
  ) : (
    <div className="card-container">
      <div className="row">
        {products.map((product) => (
          <div className="col s12 m6 l4">
            <ProductItem key={product._id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
