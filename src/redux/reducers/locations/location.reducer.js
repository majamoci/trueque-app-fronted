import {
    FETCH_LOCATION_REQUEST,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILURE,
  } from "redux/actions/locations/location.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function locations(state = initial_state, action) {
    switch (action.type) {
      case FETCH_LOCATION_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_LOCATION_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_LOCATION_FAILURE: {
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
  
  export default locations;
  