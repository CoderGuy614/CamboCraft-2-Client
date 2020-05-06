import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_ERROR,
  OTHER_ERROR,
  SET_CART_ITEMS,
  SET_CART_OPTIONS,
  UPDATE_CART_OPTIONS,
  GET_TOTAL_PRICE,
  SET_LOADING,
  PLACE_ORDER,
  SEND_CONFIRMATION,
  CLEAR_FORM_DATA,
  TOGGLE_FILTER,
  APPLY_FILTERS,
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
      return {
        ...state,
        filteredOptions: state.filteredOptions.filter(
          (o) => o.id !== action.payload
        ),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice:
          state.filteredOptions.length > 0
            ? state.filteredOptions
                .map((obj) => Number(obj.price))
                .reduce((a, b) => a + b)
            : 0,
      };
    case SEND_CONFIRMATION:
      return {
        ...state,
        messageSent: true,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case PLACE_ORDER:
      return {
        ...state,
        error: null,
        orderSent: action.payload.status === 200 ? true : false,
      };

    case CLEAR_FORM_DATA:
      return {
        ...state,
        cartProducts: [],
        filteredOptions: [],
        totalPrice: 0,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload.response.data,
      };
    case OTHER_ERROR:
      return {
        ...state,
        otherError: action.payload,
      };

    case TOGGLE_FILTER:
      if (state.filteredCategories.includes(action.payload)) {
        return {
          ...state,
          filteredCategories: state.filteredCategories.filter(
            (e) => e !== action.payload
          ),
        };
      } else {
        return {
          ...state,
          filteredCategories: [action.payload, ...state.filteredCategories],
        };
      }

    case APPLY_FILTERS:
      let result = state.products.filter((el) => {
        for (let i = 0; i < state.filteredCategories.length; i++) {
          if (state.filteredCategories[i] === el.category) {
            return true;
          }
        }
      });
      return {
        ...state,
        filteredProducts: result,
      };

    default:
      return state;
  }
};
