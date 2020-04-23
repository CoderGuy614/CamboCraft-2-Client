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
          className="back-btn waves-effect waves-light btn-small grey lighten-1 black-text"
        >
          <i className="material-icons left">home</i>Back to Products
        </a>
        <div className="row">
          <div className="col s12">
            <div className="box">
              {" "}
              This div is 12-columns wide on all screen sizes
            </div>
          </div>

          <div className="col s12 m6">
            <div className="box">
              <h4>{current.name}</h4>

              <div className="info">
                <ul className="collection">
                  <li className="collection-item grey lighten-1 black-text">
                    <i className="material-icons left">access_alarm</i>
                    Custom Orders: 48 Hours
                  </li>
                  <li className="collection-item grey lighten-2 black-text">
                    <i className="material-icons left">store</i> In Stock:{" "}
                    {current.inStock}
                  </li>

                  <li className="collection-item grey lighten-3 black-text">
                    <i className="material-icons left">local_shipping</i>
                    Free Delivery (Siem Reap)
                  </li>
                </ul>
              </div>
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
