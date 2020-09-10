import {
    FETCH_CREATE_LOCATION_REQUEST,
    FETCH_CREATE_LOCATION_SUCCESS,
    FETCH_CREATE_LOCATION_FAILURE,
  } from "redux/actions/locations/create.action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function new_location(state = initial_state, action) {
    switch (action.type) {
      case FETCH_CREATE_LOCATION_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_CREATE_LOCATION_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_CREATE_LOCATION_FAILURE: {
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
  
  export default new_location;
  