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
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case SET_CART_ITEMS:
      return {
        ...state,
        cartProducts: action.payload,
        loading: false,
      };

    case SET_CART_OPTIONS:
      let currentItem = state.cartProducts.filter(
        (product) => product._id === action.payload.id
      );
      let newFilteredOption = currentItem[0].options.filter(
        (option, index) => index === action.payload.optionIndex
      );
      newFilteredOption[0].id = action.payload.id;

      let testVar = state.filteredOptions.find((obj) =>
        obj.id === newFilteredOption[0].id ? newFilteredOption[0].id : false
      );
      //REPLACE
      // state.filteredOptions.filter((obj) => obj.id !== testVar);
      // TestVar true means that item id is already in state.filteredOptions
      // Need to replace the filteredOptions object that id in the filteredOptions array with the new value
      console.log(testVar);
      let filtered;
      if (testVar === undefined) {
        return {
          ...state,
          filteredOptions: [...state.filteredOptions, newFilteredOption[0]],
          loading: false,
        };
      } else {
        filtered = state.filteredOptions.filter((obj) => obj.id !== testVar.id);

        return {
          ...state,
          filteredOptions: [...filtered, newFilteredOption[0]],
          loading: false,
        };
      }

    case UPDATE_CART_OPTIONS:
      let foids = state.filteredOptions.map((o) => o.id);
      console.log(action.payload);
      console.log("foids", foids);

      let newFoids = state.filteredOptions.filter(
        (o) => o.id !== action.payload
      );

      return {
        ...state,
        filteredOptions: [newFoids],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
