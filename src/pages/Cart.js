import React, { useContext } from "react";
import ProductContext from "../context/product/productContext";

const Cart = (props) => {
  const productContext = useContext(ProductContext);
  // const { inCart } = productContext;

  return <div>I AM SHOPPING CART</div>;
};

export default Cart;
