import React, { useEffect, useContext } from "react";
import PreLoader from "../layout/PreLoader";
import M from "materialize-css/dist/js/materialize.min.js";
import Slider from "../layout/Slider";
import ProductOptions from "./ProductOptions";
import ProductContext from "../../context/product/productContext";

const ProductDetail = (props) => {
  const productContext = useContext(ProductContext);

  const { current, getProduct, loading } = productContext;

  useEffect(() => {
    getProduct(props.match.params.id);
    //eslint-disable-next-line
  }, []);

  if (loading || current === null) {
    return (
      <>
        <PreLoader />;
      </>
    );
  } else if (!loading && current !== null) {
    return (
      <>
        <a
          href="/"
          className="back-btn waves-effect waves-light btn-small teal lighten-1 white-text"
        >
          <i className="material-icons left">home</i>Back to Products
        </a>

        <div className="row">
          <div className="col s12">
            <div class="col s12 m4 center teal-text contact-icons">
              <i className="material-icons medium">store</i>
              <p>Now In Stock: {current.inStock}</p>
            </div>
            <div class="col s12 m4 center teal-text contact-icons">
              <i className="material-icons medium">access_alarm</i>
              <p>Custom Orders: Ready in 48 - 72 hours</p>
            </div>
            <div class="col s12 m4 center teal-text contact-icons">
              <i className="material-icons medium">local_shipping</i>
              <p>Free delivery in Siem Reap + Try Before You Buy</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <div className="box">
              <h4>{current.name}</h4>

              <div className="info"></div>
              <Slider photos={current.photos} />
            </div>
          </div>
          <div className="col s12 m6">
            <ProductOptions
              id={current._id}
              name={current.name}
              options={current.options}
              description={current.description}
            />
          </div>
        </div>
      </>
    );
  }
};

export default ProductDetail;
