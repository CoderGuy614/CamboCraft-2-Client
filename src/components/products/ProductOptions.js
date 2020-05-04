import React, { Fragment, useContext } from "react";
import ProductContext from "../../context/product/productContext";
import M from "materialize-css/dist/js/materialize.min.js";

const ProductOptions = (props) => {
  const addToCartHandler = () => {
    let existing = localStorage.getItem("id");
    existing = existing ? existing.split(",") : [];

    if (existing.includes(props.id)) {
      M.toast({ html: "Item is already in your cart" });
    } else {
      existing.push(props.id);
      localStorage.setItem("id", existing.toString());
      M.toast({ html: "Added to Shopping Cart" });
      setCartItems();
    }
  };

  const productContext = useContext(ProductContext);

  const { setCartItems } = productContext;

  return (
    <div id="menu">
      <h5>Details</h5>
      {props.description}

      <ul className="collection with-header">
        <li className="collection-header">
          <h5>Product Options</h5>
        </li>

        {props.options.map((item, index) => {
          return (
            <li key={index} className="collection-item avatar">
              <i className="material-icons circle white red-text lighten-2">
                favorite_border
              </i>
              <span className="title">{item.name}</span>
              <h6>Price:${item.price}</h6>
            </li>
          );
        })}
      </ul>
      <a onClick={() => addToCartHandler()} className="add-to-cart btn">
        {" "}
        Add To Cart
        <i className="material-icons">shopping_cart</i>
      </a>
      <p className="center">
        <em>You can specify options in the shopping cart</em>
      </p>
    </div>
  );
};
export default ProductOptions;
