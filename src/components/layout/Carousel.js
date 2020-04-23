import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Carousel = ({ photos }) => {
  useEffect(() => {
    let carousel = document.querySelectorAll(".carousel");
    M.Carousel.init(carousel, {});
  });
  return (
    <div className="carousel">
      {photos.map((img, index) => (
        <a className="carousel-item">
          <img src={img} />
        </a>
      ))}
    </div>
  );
};

export default Carousel;
