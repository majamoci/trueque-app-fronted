import {
    FETCH_REGISTER_SYSTEM_PRODUCT_REQUEST,
    FETCH_REGISTER_SYSTEM_PRODUCT_SUCCESS,
    FETCH_REGISTER_SYSTEM_PRODUCT_FAILURE,
    
  } from "redux/actions/sipa/register-system-product.action";


  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_system_product(state = initial_state, action) {
    switch (action.type) {
        case FETCH_REGISTER_SYSTEM_PRODUCT_REQUEST: {
            return {
              ...state,//devovemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_REGISTER_SYSTEM_PRODUCT_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_REGISTER_SYSTEM_PRODUCT_FAILURE: {
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

  export default register_system_product;