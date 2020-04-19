import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
const ProductItem = ({ product }) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className="card small">
        <div className="card-image">
          <img className="materialboxed" src={product.photos[0]} />
        </div>
        <div className="card-content">
          <div className="chip green lighten-2" style={chipStyle}>
            ${product.minPrice}
          </div>
          <h6> {product.name}</h6>
        </div>
      </div>
    </Fragment>
  );
};

const chipStyle = {
  fontSize: "15px",
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
