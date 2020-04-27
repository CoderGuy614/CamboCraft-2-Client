import React, { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import productReducer from "./productReducer";

import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
  SET_CART_ITEMS,
  SET_CART_OPTIONS,
  UPDATE_CART_OPTIONS,
  GET_TOTAL_PRICE,
  SET_LOADING,
  PLACE_ORDER,
  SEND_CONFIRMATION,
} from "../types";

const ProductState = (props) => {
  const initialState = {
    cartProducts: [],
    filteredOptions: [],
    totalPrice: 0,
    loading: false,
    products: null,
    current: null,
    filtered: null,
    error: null,
    orderSent: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get Products

  const getProducts = async () => {
    try {
      const res = await axios.get("/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await axios.get(`/products/${id}`);
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const setCartItems = async () => {
    try {
      setLoading();
      const res = await axios.get("/products");
      let ids = localStorage.getItem("id").split(",");
      let result = [];
      ids.forEach((id) => {
        result.push(res.data.filter((prod) => prod._id === id)[0]);
      });
      dispatch({
        type: SET_CART_ITEMS,
        payload: result,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const setCartOptions = (id, optionIndex) => {
    try {
      const objectToSend = { id: id, optionIndex: optionIndex };

      dispatch({
        type: SET_CART_OPTIONS,
        payload: objectToSend,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const updateCartOptions = (id) => {
    try {
      dispatch({
        type: UPDATE_CART_OPTIONS,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const getTotalPrice = () => {
    try {
      dispatch({
        type: GET_TOTAL_PRICE,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const placeOrder = async (formData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await axios.post("/orders", formData, config);
      dispatch({
        type: PLACE_ORDER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const sendConfirmation = async (formData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await axios.post("/confirmation", formData, config);
      dispatch({
        type: SEND_CONFIRMATION,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };
  // Set loading to true
  const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        cartProducts: state.cartProducts,
        filteredOptions: state.filteredOptions,
        totalPrice: state.totalPrice,
        getProducts,
        getProduct,
        setCartItems,
        setCartOptions,
        updateCartOptions,
        getTotalPrice,
        setLoading,
        placeOrder,
        sendConfirmation,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
