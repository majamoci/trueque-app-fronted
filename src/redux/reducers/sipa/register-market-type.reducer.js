import {
    FETCH_MARKET_TYPE_REQUEST,
    FETCH_MARKET_TYPE_SUCCESS,
    FETCH_MARKET_TYPE_FAILURE,
    
  } from "redux/actions/sipa/register-market-type.actions";


  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_sp(state = initial_state, action) {
    switch (action.type) {
        case FETCH_MARKET_TYPE_REQUEST: {
            return {
              ...state,//devovemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_MARKET_TYPE_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_MARKET_TYPE_FAILURE: {
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

  export default register_sp;