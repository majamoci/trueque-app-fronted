import {
    FETCH_GET_MARKET_TYP_REQUEST,
    FETCH_GET_MARKET_TYP_SUCCESS,
    FETCH_GET_MARKET_TYP_FAILURE,
  } from "redux/actions/sipa/get-markettype.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function get_market_tp(state = initial_state, action) {
    switch (action.type) {
      case FETCH_GET_MARKET_TYP_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_GET_MARKET_TYP_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_GET_MARKET_TYP_FAILURE: {
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
  
  export default get_market_tp;
  