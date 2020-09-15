import {
    FETCH_REGISTER_PRICE_REQUEST, 
    FETCH_REGISTER_PRICE_SUCCESS, 
    FETCH_REGISTER_PRICE_FAILURE,
    
  } from "redux/actions/sipa/register-price.action";

  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_price(state = initial_state, action) {
    switch (action.type) {
        case FETCH_REGISTER_PRICE_REQUEST: {
            return {
              ...state,//devovemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_REGISTER_PRICE_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_REGISTER_PRICE_FAILURE: {
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

  export default register_price;