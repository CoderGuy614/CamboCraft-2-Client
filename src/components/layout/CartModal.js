import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ProductContext from "../../context/product/productContext";
import axios from "axios";

const CartModal = () => {
  const productContext = useContext(ProductContext);
  const {
    cartProducts,
    filteredOptions,
    setLoading,
    loading,
    setCartItems,
    setCartOptions,
    updateCartOptions,
    totalPrice,
    getTotalPrice,
    placeOrder,
    sendConfirmation,
  } = productContext;

  useEffect(() => {
    setCartItems();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setOrder({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  }, []);

  // Delete a Cart Item Handler Function
  const removeItem = (index) => {
    if (cartProducts.length <= 1) {
      M.toast({ html: "Cart must have at least 1 item" });
    } else {
      //Remove the id of the clicked item from local storage
      let existing = localStorage.getItem("id");
      let array = existing.split(",");
      let targetId = array[index];

      array.splice(index, 1).join();
      localStorage.setItem("id", array);

      setCartItems();
      updateCartOptions(targetId);
      getTotalPrice();
      M.toast({ html: "Removed item" });
    }
  };

  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const { name, email, phone, location, message } = order;
  const [checkedButton, setCheckedButton] = useState({});

  const onInputChange = (e) =>
    setOrder({ ...order, [e.target.name]: e.target.value });

  const onPriceChange = (i, product, index1) => {
    setCartOptions(product._id, i);
    setCheckedButton({ ...checkedButton, [index1]: i });
    getTotalPrice();
  };

  const resetForm = () => {
    setOrder({
      name: "",
      message: "",
      email: "",
      phone: "",
      location: "",
      //Add in a field for button text to change to sent
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      location,
      message,
      cartProducts,
      filteredOptions,
    };
    placeOrder(formData);
    sendConfirmation(formData);
  };
  return (
    <>
      <div id="CartModal" className="modal">
        <div className="modal-content">
          <h4>Shopping Cart</h4>

          <ul className="collection">
            {cartProducts.map((product, index1) => (
              <li key={index1} className="collection-item avatar">
                <img src={product.photos[0]} alt="" className="circle" />
                <span className="title">{product.name}</span>
                {/* Begin Options */}
                <form action="#">
                  {product.options.map((option, i) => (
                    <p key={i}>
                      <label htmlor={i}>
                        <input
                          onChange={() => onPriceChange(i, product, index1)}
                          checked={checkedButton[index1] === i ? true : false}
                          type="radio"
                        />
                        <span>
                          {option.name} ${option.price}
                        </span>
                      </label>
                    </p>
                  ))}
                </form>
                {/* End Select Menu */}
                <a href="#!" className="secondary-content">
                  <i
                    onClick={() => removeItem(index1)}
                    className="material-icons"
                  >
                    delete
                  </i>
                </a>
              </li>
            ))}
          </ul>
          {/* //Put total price Here  */}

          <h5>
            Total Order Price<span className="right">${totalPrice}</span>
          </h5>
        </div>
        {/* Cart Contents */}

        <div className="card-panel grey lighten-3">
          <form onSubmit={onSubmit}>
            <h5>Order Details</h5>
            <div className="input-field">
              <input
                onChange={onInputChange}
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input
                onChange={onInputChange}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
              />
              <label htmlFor="name">Email</label>
            </div>
            <div className="input-field">
              <input
                onChange={onInputChange}
                type="text"
                placeholder="Phone"
                id="phone"
                name="phone"
              />
              <label htmlFor="name">Phone</label>
            </div>
            <div className="input-field">
              <textarea
                className="materialize-textarea"
                placeholder="Delivery Location"
                id="location"
                name="location"
                onChange={onInputChange}
              ></textarea>
              <label htmlFor="location">Delivery Location</label>
            </div>
            <div className="input-field">
              <textarea
                className="materialize-textarea"
                placeholder="Special Requests"
                id="message"
                name="message"
                onChange={onInputChange}
              ></textarea>
              <label htmlFor="message">Special Requests</label>
            </div>
            <input type="submit" value="submit" className="btn" />
          </form>
        </div>

        {/* //Modal Footer  */}
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Close Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default CartModal;
