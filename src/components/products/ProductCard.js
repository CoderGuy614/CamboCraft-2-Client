import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
const ProductCard = ({ product }) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className="card small">
        <div className="card-image">
          <img className="materialboxed" src={product.photos[0]} />
          <span className="card-title">${product.minPrice}</span>
        </div>
        <div className="card-content center">
          <h6>{product.name}</h6>
        </div>
        <div className="grey lighten-2 center card-action">
          <Link className="black-text" to={`/product/${product._id}`}>
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
