import {
    FETCH_REGISTER_CATEGORY_REQUEST,
    FETCH_REGISTER_CATEGORY_SUCCESS,
    FETCH_REGISTER_CATEGORY_FAILURE,
    
  } from "redux/actions/sipa/register-category.actions";


  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_category(state = initial_state, action) {
    switch (action.type) {
        case FETCH_REGISTER_CATEGORY_REQUEST: {
            return {
              ...state,//devovemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_REGISTER_CATEGORY_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_REGISTER_CATEGORY_FAILURE: {
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

  export default register_category;