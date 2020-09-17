import {
    FETCH_GET_PRODUCT_REQUEST,
    FETCH_GET_PRODUCT_SUCCESS,
    FETCH_GET_PRODUCT_FAILURE,
  } from "redux/actions/sipa/get-product.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function get_product(state = initial_state, action) {
    switch (action.type) {
      case FETCH_GET_PRODUCT_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_GET_PRODUCT_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_GET_PRODUCT_FAILURE: {
        return {
          loading: false,
          data: {},
          errors: action.payload,
        };
      }
      default:
        return state;
    }
  }
  
  export default get_product;
  