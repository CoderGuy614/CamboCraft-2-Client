import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
const ProductCard = ({ product }) => {
  useEffect(() => {
    let mtlbox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(mtlbox, {});
  }, []);
  return (
    <Fragment>
      <div className="card">
        <div className="card-image">
          <img
            className="responsive-img materialboxed"
            src={product.photos[0]}
          />
          <span className="card-title">${product.minPrice}</span>
        </div>
        <div className="card-content">
          <div className="valign-wrapper">
            <h6 className="teal-text">{product.name}</h6>
          </div>
        </div>
        <div className="teal lighten-1 center card-action">
          <Link className="white-text card-link" to={`/product/${product._id}`}>
            View Details
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

const chipStyle = {
  fontSize: "15px",
};

const cardFab = {
  position: "relative",

  color: "blue",
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
