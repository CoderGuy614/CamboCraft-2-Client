import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ProductContext from "../../context/product/productContext";

const CartModal = () => {
  const productContext = useContext(ProductContext);
  const {
    products,
    getProducts,
    cartProducts,
    setLoading,
    loading,
    setCartItems,
    setCartOptions,
    updateCartOptions,
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
      let targetId = array[index];
      array.splice(index, 1).join();
      localStorage.setItem("id", array);

      setCartItems();
      updateCartOptions(targetId);
      //Update the context state for the filteredOptions after deleting an item

      M.toast({ html: "Removed item" });
    }
  };

  const [shopper, setShopper] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const { name, email, phone, location } = shopper;
  const [checkedButton, setCheckedButton] = useState({});

  // const initialValue = { itemName: "", itemId: "", option: "", price: 0 };
  const initialValue = {};
  const [items, setItems] = useState([]);

  const onInputChange = (e) =>
    setShopper({ ...shopper, [e.target.name]: e.target.value });

  const onPriceChange = (i, option, product, index1) => {
    // if the existing state contains a key with the same cart index, update the object at that index.  Otherwise, add a new object to the array

    setCartOptions(product._id, i);

    setCheckedButton({ ...checkedButton, [index1]: i });
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
                          onChange={() =>
                            onPriceChange(i, option, product, index1)
                          }
                          checked={checkedButton[index1] == i ? true : false}
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
            Total Order Price<span className="right">${}</span>
          </h5>
        </div>
        {/* Cart Contents */}
        <div className="card-panel grey lighten-3">
          <h5>Order Details</h5>
          <div className="input-field">
            <input type="text" placeholder="Name" id="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email" placeholder="Email" id="email" />
            <label htmlFor="name">Email</label>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Phone" id="phone" />
            <label htmlFor="name">Phone</label>
          </div>
          <div className="input-field">
            <textarea
              className="materialize-textarea"
              placeholder="Delivery Location"
              id="location"
            ></textarea>
            <label htmlFor="location">Delivery Location</label>
          </div>
          <div className="input-field">
            <textarea
              className="materialize-textarea"
              placeholder="Special Requests"
              id="message"
            ></textarea>
            <label htmlFor="message">Special Requests</label>
          </div>
          <input type="submit" value="submit" className="btn" />
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
