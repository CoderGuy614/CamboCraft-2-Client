import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Slider = ({ photos }) => {
  useEffect(() => {
    let slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, { interval: 3000 });
  });

  return (
    <Fragment>
      <div className="slider">
        <ul className="slides">
          {photos.map((photo, index) => (
            <li key={index}>
              <img src={photo} />
              <div className="caption center-align">
                <h3></h3>
                <h5 className="light grey-text text-lighten-3"></h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Slider;
