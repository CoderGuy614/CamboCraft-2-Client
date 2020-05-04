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
            className="brand-logo left hide-on-small-only"
          >
            <Link to="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            CamboCraft Store
          </Link>

          <a
            style={{ paddingLeft: "10px" }}
            href="#CartModal"
            className="brand-logo modal-trigger right hide-on-med-and-up"
          >
            <i className="material-icons">shopping_cart</i>
          </a>

          <ul className="right hide-on-small-only">
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
          <a href="https://coderguy614.github.io/CamboCraft/">
            <i className="material-icons left">home</i>Home
          </a>
        </li>
        <li>
          <a href="https://coderguy614.github.io/CamboCraft/#gallery">
            <i className="material-icons left">camera_alt</i>Gallery
          </a>
        </li>
        <li>
          <a href="https://coderguy614.github.io/CamboCraft/#contact">
            <i className="material-icons left">call</i>Contact
          </a>
        </li>
        {/* <li>
          <a href="#CartModal">
            <i className="material-icons left modal-trigger">shopping_cart</i>
            Shopping Cart
          </a>
        </li> */}
      </ul>
    </Fragment>
  );
};

export default Navbar;
