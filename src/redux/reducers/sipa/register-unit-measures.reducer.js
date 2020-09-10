import {
    FETCH_UNIT_MEASURE_REQUEST,
    FETCH_UNIT_MEASURE_SUCCESS,
    FETCH_UNIT_MEASURE_FAILURE,
    
  } from "redux/actions/sipa/register-unit-measures.actions";


  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_unit_measure(state = initial_state, action) {
    switch (action.type) {
        case FETCH_UNIT_MEASURE_REQUEST: {
            return {
              ...state,//devolvemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_UNIT_MEASURE_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_UNIT_MEASURE_FAILURE: {
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

  export default register_unit_measure;