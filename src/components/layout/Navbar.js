import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <Link
            style={{ paddingLeft: "10px" }}
            to="/"
            className="brand-logo left"
          >
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            Online Store
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/about">
                <i className="material-icons left">info</i>About Us
              </Link>
            </li>
            <li>
              <a className="modal-trigger" href="#CartModal">
                <i className="material-icons left">shopping_cart</i>Shopping
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">
            <i className="material-icons left">store</i>Shop
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="material-icons left">info</i>About Us
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="material-icons left">shopping_cart</i>Shopping Cart
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
