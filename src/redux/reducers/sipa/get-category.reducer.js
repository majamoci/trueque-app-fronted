import {
    FETCH_GET_CATEGORY_REQUEST,
    FETCH_GET_CATEGORY_SUCCESS,
    FETCH_GET_CATEGORY_FAILURE,
  } from "redux/actions/sipa/get-category.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function get_category(state = initial_state, action) {
    switch (action.type) {
      case FETCH_GET_CATEGORY_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_GET_CATEGORY_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_GET_CATEGORY_FAILURE: {
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
  
  export default get_category;
  