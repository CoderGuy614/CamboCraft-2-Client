import React from "react";
const ProductModal = () => {
  return (
    // <div id="#expand-product-modal" className="modal" style={modalStyle}>
    //   <img className="responsive-img" src={image} />
    // </div>
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default ProductModal;
