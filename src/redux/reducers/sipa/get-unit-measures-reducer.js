import {
    FETCH_GET_UNIT_MEASURES_REQUEST,
    FETCH_GET_UNIT_MEASURES_SUCCESS,
    FETCH_GET_UNIT_MEASURES_FAILURE,
  } from "redux/actions/sipa/get-unit-measures-action";
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function get_unit_measures(state = initial_state, action) {
    switch (action.type) {
      case FETCH_GET_UNIT_MEASURES_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_GET_UNIT_MEASURES_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_GET_UNIT_MEASURES_FAILURE: {
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
  
  export default get_unit_measures;
  