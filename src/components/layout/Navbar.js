import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <a
            style={{ paddingLeft: "10px" }}
            href="#!"
            className="brand-logo left"
          >
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            Online Store
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="cart.html">
                <i className="material-icons left">shopping_cart</i>Shopping
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="about.html">About Us</a>
        </li>
        <li>
          <a href="cart.html">
            <i className="material-icons left">shopping_cart</i>Shopping Cart
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
