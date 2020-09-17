import {
    FETCH_GET_MARKET_SECTOR_REQUEST,
    FETCH_GET_MARKET_SECTOR_SUCCESS,
    FETCH_GET_MARKET_SECTOR_FAILURE,
  } from "redux/actions/sipa/get-market-sector.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function get_market_sec(state = initial_state, action) {
    switch (action.type) {
      case FETCH_GET_MARKET_SECTOR_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_GET_MARKET_SECTOR_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_GET_MARKET_SECTOR_FAILURE: {
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
  
  export default get_market_sec;
  