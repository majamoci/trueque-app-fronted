import {
    FETCH_GET_MARKET_REQUEST,
    FETCH_GET_MARKET_SUCCESS,
    FETCH_GET_MARKET_FAILURE,
  } from "redux/actions/sipa/get-markets.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function get_market(state = initial_state, action) {
    switch (action.type) {
      case FETCH_GET_MARKET_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_GET_MARKET_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_GET_MARKET_FAILURE: {
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
  
  export default get_market;
  