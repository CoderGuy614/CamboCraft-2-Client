import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ProductContext from "../../context/product/productContext";
import PreLoader from "./PreLoader";

const CartModal = () => {
  const productContext = useContext(ProductContext);
  const {
    products,
    getProducts,
    cartProducts,
    setLoading,
    loading,
    setCartItems,
  } = productContext;

  useEffect(() => {
    setCartItems();
    //eslint-disable-next-line
  }, []);
  const removeItem = (index) => {
    if (cartProducts.length <= 1) {
      M.toast({ html: "Cart must have at least 1 item" });
    } else {
      //Remove the id of the clicked item from local storage
      let existing = localStorage.getItem("id");
      let array = existing.split(",");
      array.splice(index, 1).join();
      localStorage.setItem("id", array);

      setCartItems();
      M.toast({ html: "Removed item" });
    }
  };

  return (
    <div id="CartModal" className="modal">
      <div className="modal-content">
        <h4>Shopping Cart</h4>

        <ul class="collection">
          {cartProducts.map((product, index) => (
            <li class="collection-item avatar">
              <img src={product.photos[0]} alt="" class="circle" />
              <span class="title">{product.name}</span>
              {/* Begin Select Menu */}
              <form action="#">
                {product.options.map((option) => (
                  <p>
                    <label>
                      <input name="group1" type="radio" checked />
                      <span>
                        {option.name} ${option.price}
                      </span>
                    </label>
                  </p>
                ))}
              </form>
              {/* End Select Menu */}
              <a href="#!" class="secondary-content">
                <i onClick={() => removeItem()} class="material-icons">
                  delete
                </i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Close Cart
        </a>
      </div>
    </div>
  );
};

export default CartModal;
