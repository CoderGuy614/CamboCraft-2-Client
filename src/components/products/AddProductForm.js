import React, { Component } from "react";
import { withRouter } from "react-router";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";

class AddProductForm extends Component {
  state = {
    newPhoto: "",
    photos: [],
    name: "",
    description: "",
    deliveryTime: "",
    inStock: "",
    price: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/products", { ...this.state })
      .then((response) => {
        M.toast({ html: "Product Added Successfully!" });
        this.props.history.push("/");
      })
      .catch((err) => console.log("Something went wrong"));
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addPhoto = (e) => {
    this.setState((state) => {
      const photos = [...state.photos, state.newPhoto];
      return {
        photos,
        newPhoto: "",
      };
    });
  };

  deletePhoto = (index) => {
    let photos = [...this.state.photos];
    photos = photos.filter((e, i) => i !== index);
    this.setState({ photos });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h4 className="">Add a new product</h4>

          <div className="input-field">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              placeholder="Example: Red Crochet Bikini"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="description">Product Description</label>
            <input
              type="text"
              placeholder="Example: This bikini looks great at the beach"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="price">Price in $USD</label>
            <input
              type="number"
              name="price"
              id="price"
              value={this.state.price}
              onChange={this.onChange}
            />
          </div>

          <div className="input-field inline">
            <select name="deliveryTime" onChange={this.onChange}>
              <option selected disabled>
                Select Delivery Time
              </option>
              <option value="60">Less than 1 hour</option>
              <option value="240">1 - 4 Hours</option>
              <option value="1440">24 Hours</option>
              <option value="2880">48 Hours</option>
            </select>
          </div>

          <div className="input-field inline">
            <select name="inStock" onChange={this.onChange}>
              <option selected disabled>
                Select In Stock Qty
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div>
            <div className="input-field">
              <button type="button" onClick={this.addPhoto} class="btn right">
                Add Photo
              </button>
              <label htmlFor="newPhoto">Photo URL</label>
              <input
                type="text"
                name="newPhoto"
                id="newPhoto"
                value={this.state.newPhoto}
                onChange={this.onChange}
              />
            </div>
            {this.state.photos.length > 0 && (
              <div className="container">
                <ul className="collection-with-header">
                  <li class="collection-header">
                    <h6>Attached Photos</h6>
                  </li>
                  {this.state.photos.map((photo, index) => {
                    return (
                      <li key={index} class="collection-item grey lighten-4">
                        <div>
                          <i className="material-icons">attachment</i>
                          Photo {index + 1}{" "}
                          <a href="#!" class="secondary-content">
                            <i
                              onClick={() => this.deletePhoto(index)}
                              class="material-icons"
                            >
                              delete
                            </i>
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <input type="submit" value="Add Product" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddProductForm);
