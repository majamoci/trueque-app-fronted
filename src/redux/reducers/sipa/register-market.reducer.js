import {
    FETCH_REGISTER_MARKET_REQUEST,
    FETCH_REGISTER_MARKET_SUCCESS,
    FETCH_REGISTER_MARKET_FAILURE,
    
  } from "redux/actions/sipa/register-market.action";

  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_market(state = initial_state, action) {
    switch (action.type) {
        case FETCH_REGISTER_MARKET_REQUEST: {
            return {
              ...state,//devovemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_REGISTER_MARKET_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_REGISTER_MARKET_FAILURE: {
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

  export default register_market;