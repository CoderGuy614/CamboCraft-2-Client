import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
const Navbar = () => {
  useEffect(() => {
    var sideNav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sideNav, {});
  }, []);
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <Link
            style={{ paddingLeft: "10px" }}
            to="/"
            className="brand-logo left"
          >
            <Link to="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            Online Store
          </Link>

          <Link
            style={{ paddingLeft: "10px" }}
            to="/"
            className="brand-logo right hide-on-med-and-up"
          >
            <i className="material-icons">shopping_cart</i>
          </Link>

          <ul className="right hide-on-med-and-down">
            {/* <li>
              <Link to="/about">
                <i className="material-icons left">info</i>About Us
              </Link>
            </li> */}
            <li>
              <a className="modal-trigger" href="#CartModal">
                <i className="material-icons left">shopping_cart</i>Shopping
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        <li>
          <Link to="/">
            <i className="material-icons left">store</i>Shop
          </Link>
        </li>
        {/* <li>
          <Link to="/about">
            <i className="material-icons left">info</i>About Us
          </Link>
        </li> */}
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
